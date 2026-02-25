import type { Message, ToastOptions, ToastPromiseMessages, ToastToDismiss, ToastType } from '.';

function UniqueComponentId(prefix = 'pv_id_') {
    return prefix + Math.random().toString(16).slice(2);
}

class Observer {
    subscribers: Array<(toast: Message | ToastToDismiss) => void>;
    toasts: Array<Message>;

    constructor() {
        this.subscribers = [];
        this.toasts = [];
    }

    // We use arrow functions to maintain the correct `this` reference
    subscribe = (subscriber: (toast: Message | ToastToDismiss) => void) => {
        this.subscribers.push(subscriber as any);
        return () => {
            const index = this.subscribers.indexOf(subscriber as any);
            this.subscribers.splice(index, 1);
        };
    };

    publish = (data: Message | ToastToDismiss) => {
        this.subscribers.forEach((subscriber) => subscriber(data));
    };

    addToast = (data: Message) => {
        this.publish(data);
        this.toasts = [...this.toasts, data];
    };

    create = (title: string, options: ToastOptions) => {
        const id = options.id ?? UniqueComponentId('toast_');
        const alreadyExists = this.toasts.find((toast) => {
            return toast.id === id;
        });

        if (alreadyExists) {
            this.toasts = this.toasts.map((toast) => {
                if (toast.id === id) {
                    this.publish({ ...toast, ...options, id, title });
                    return {
                        ...toast,
                        ...options,
                        id,
                        title,
                    };
                }

                return toast;
            });
        } else {
            this.addToast({
                title,
                id,
                scale: 1,
                zIndex: 200,
                offsetY: 0,
                ...options,
            });
        }

        return id;
    };
    dismiss = (id?: string) => {
        if (!id) {
            this.toasts.forEach((toast) => {
                this.publish({ id: toast.id, dismiss: true });
            });
            this.toasts = [];
        } else {
            this.publish({ id, dismiss: true });
            this.toasts = this.toasts.filter((t) => t.id !== id);
        }
    };

    add = (message: string, options?: ToastOptions) => {
        return this.create(message, { ...options });
    };

    success = (message: string, options?: ToastOptions) => {
        return this.create(message, { type: 'success', ...options });
    };
    error = (message: string, options?: ToastOptions) => {
        return this.create(message, { type: 'danger', ...options });
    };
    info = (message: string, options?: ToastOptions) => {
        return this.create(message, { type: 'info', ...options });
    };
    warning = (message: string, options?: ToastOptions) => {
        return this.create(message, { type: 'warning', ...options });
    };

    promise = <T>(promise: Promise<T>, messages: ToastPromiseMessages<T>, options?: ToastOptions): Promise<T> => {
        const id = this.create(messages.loading, {
            description: messages.loadingDescription,
            ...options,
            type: 'promise',
            life: Infinity,
        });

        const updateToast = (title: string, description: string | undefined, type: ToastType) => {
            this.create(title, { description, ...options, id, type, life: options?.life ?? 3000 });
        };

        const resolveText = (value: string | ((arg: T) => string), arg: T): string => (typeof value === 'function' ? value(arg) : value);

        const resolveOptionalText = (value: string | ((arg: T) => string) | undefined, arg: T): string | undefined =>
            typeof value === 'function' ? value(arg) : value;

        promise
            .then((data) => {
                updateToast(resolveText(messages.success, data), resolveOptionalText(messages.successDescription, data), 'success');
                return data;
            })
            .catch((err) => {
                updateToast(resolveText(messages.error, err), resolveOptionalText(messages.errorDescription, err), 'danger');
                throw err;
            });

        return promise;
    };
}

export const ToastState = new Observer();

function toastFunction(message: string, options?: ToastOptions) {
    const id = UniqueComponentId('toast_');
    ToastState.create(message, { ...options, id });
    return id;
}

export const toast = Object.assign(toastFunction, {
    add: ToastState.add,
    success: ToastState.success,
    error: ToastState.error,
    info: ToastState.info,
    warning: ToastState.warning,
    dismiss: ToastState.dismiss,
    promise: ToastState.promise,
});
