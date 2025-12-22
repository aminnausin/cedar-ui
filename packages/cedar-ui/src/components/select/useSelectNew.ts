import type { SelectItem } from './select.types';

import type { Ref } from 'vue';
import { ref, watch } from 'vue';

export default function useSelect(
    items: Ref<SelectItem[]>,
    selectButton: HTMLElement | null,
    selectableItemsList: HTMLElement | null,
    keydownTimeout = 1000,
) {
    const isOpen = ref(false);
    const selectedItem = ref<SelectItem | null>(null);
    const activeItem = ref<SelectItem | null>(null);

    const dropdownPosition = ref<'top' | 'bottom'>('bottom');

    const userInput = ref('');

    const keydownClearTimeout = ref<number>();

    const toggleSelect = (state?: boolean) => {
        isOpen.value = state ?? !isOpen.value;
    };

    // selectableItemIsActive
    const isActive = (item: SelectItem) => {
        return activeItem.value?.value === item.value;
    };

    // selectScrollToActiveItem
    const scrollToActiveItem = () => {
        if (!activeItem.value || !selectableItemsList) return;

        const el: HTMLElement | null = selectableItemsList.querySelector(`[data-value=${activeItem.value.value}]`);

        el?.focus();
    };

    // selectableItemActiveNext
    const activateNext = () => {
        console.log('next');

        if (!activeItem.value) return;

        const index = items.value.indexOf(activeItem.value);
        if (index < items.value.length - 1) {
            activeItem.value = items.value[index + 1];
            scrollToActiveItem();
        }
    };

    // selectableItemActivePrevious
    const activatePrevious = () => {
        if (!activeItem.value) return;

        const index = items.value.indexOf(activeItem.value);
        if (index > 0) {
            activeItem.value = items.value[index - 1];
            scrollToActiveItem();
        }
    };

    const findBestMatch = () => {
        const typed = userInput.value.toLowerCase();

        let best: SelectItem | null = null;
        let bestIndex = Infinity;

        for (const item of items.value) {
            if (item.disabled) continue;

            const index = item.title.toLowerCase().indexOf(typed);

            if (index !== -1 && index < bestIndex) {
                best = item;
                bestIndex = index;
            }
        }
        return best;
    };

    // what? this isnt searchable
    const onKeydown = (event: KeyboardEvent) => {
        // if (!/^[a-z]$/i.test(event.key)) return
        // if (event.keyCode >= 65 && event.keyCode <= 90) {
        // if (!/^[a-z]$/i.test(event.key)) return;
        if (!isOpen.value) return;

        userInput.value += event.key;

        const match = findBestMatch();

        if (match) {
            activeItem.value = match;
            scrollToActiveItem();
        }

        if (keydownClearTimeout.value) {
            clearTimeout(keydownClearTimeout.value);
        }

        keydownClearTimeout.value = window.setTimeout(() => {
            userInput.value = '';
        }, keydownTimeout);
    };

    const updatePosition = () => {
        if (!isOpen.value || !selectableItemsList || !selectButton) return;
        const selectDropdownBottomPos =
            selectButton.getBoundingClientRect().top +
            selectButton.offsetHeight +
            parseInt(window.getComputedStyle(selectableItemsList).maxHeight);
        dropdownPosition.value = window.innerHeight < selectDropdownBottomPos ? 'top' : 'bottom';
    };

    watch(
        () => isOpen,
        function (value) {
            activeItem.value = selectedItem.value ?? items.value[0];

            if (!value) {
                window.removeEventListener('resize', updatePosition);
                return;
            }

            window.setTimeout(function () {
                scrollToActiveItem();
            }, 10);

            updatePosition();
            window.addEventListener('resize', updatePosition);
        },
        { immediate: false },
    );

    return {
        // state
        isOpen,
        selectedItem,
        activeItem,
        dropdownPosition,

        // actions
        toggleSelect,
        activateNext,
        activatePrevious,
        isActive,
        onKeydown,
        updatePosition,
        scrollToActiveItem,
    };
}
