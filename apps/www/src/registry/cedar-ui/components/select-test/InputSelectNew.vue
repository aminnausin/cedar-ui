<script setup lang="ts">
import { cn, type SelectItem } from '@aminnausin/cedar-ui';

import { computed, onMounted, ref, useTemplateRef, watch } from 'vue';
import { ButtonBase, ButtonText } from '../button';
import { OnClickOutside } from '@vueuse/components';

import useSelect from '../../../../../../../packages/cedar-ui/src/components/select/useSelectNew';

const props = withDefaults(
    defineProps<{
        name?: string;
        class?: string;
        rootClass?: string;
        placeholder?: string;
        defaultItem?: number | null;
        options?: SelectItem[];
        disabled?: boolean;
        title?: string;
        prefix?: string;
        menuMargin?: { top: string; bottom: string };
    }>(),
    {
        class: '',
        rootClass: '',
        prefix: '',
        defaultItem: null,
        options: () => [
            {
                title: 'Title',
                value: 'title',
                disabled: false,
            },
            {
                title: 'Date Uploaded',
                value: 'date',
                disabled: false,
            },
            {
                title: 'Date released',
                value: 'date_released',
                disabled: false,
            },
            {
                title: 'Episode',
                value: 'episode',
                disabled: true,
            },
            {
                title: 'Season',
                value: 'season',
                disabled: true,
            },
        ],
    },
);

const items = computed(() => {
    return props.options ?? [];
});

const emit = defineEmits(['selectItem']);
const selectButton = useTemplateRef<HTMLButtonElement>('selectButton');
const selectableItemsList = useTemplateRef<HTMLUListElement>('selectableItemsList');
const selectableItemsRoot = useTemplateRef<HTMLDivElement>('selectableItemsRoot');
const {
    isOpen,
    dropdownPosition,
    toggleSelect,
    scrollToActiveItem,
    onKeydown,
    activateNext,
    activatePrevious,
    isActive,
    activeItem,
    selectedItem,
} = useSelect(items, selectButton.value, selectableItemsList.value);

const closeFocusOutTimeout = ref<number | null>(null);

const handleItemClick = (item: any, setFocus = true) => {
    selectedItem.value = item;
    toggleSelect(false);
    if (setFocus && selectButton.value) selectButton.value?.focus();
    emit('selectItem', selectedItem.value);
};

const handleItemHover = (item: any) => {
    activeItem.value = item;
    scrollToActiveItem();
};

const handleItemFocus = (item: any) => {
    activeItem.value = item;
};

const handleFocusOut = () => {
    if (closeFocusOutTimeout.value) {
        clearTimeout(closeFocusOutTimeout.value);
    }

    closeFocusOutTimeout.value = window.setTimeout(() => {
        if (!selectableItemsRoot.value) return;

        const active = document.activeElement;

        if (!selectableItemsRoot.value.contains(active)) {
            toggleSelect(false);
        }
    }, 0);
};

onMounted(() => {
    if (props.disabled) return;

    if (props.defaultItem != undefined && props.defaultItem < props.options.length && props.defaultItem >= 0) {
        handleItemClick(props.options[props.defaultItem], false);
    }
});

// watch(
//     () => props.options,
//     () => {
//         select.selectableItems = props.options;
//     },
// );
</script>
<template>
    <div class="absolute top-0 left-0 z-50">
        <!-- <p>{{ activeItem }}</p> -->
        <!-- <p>{{ selectButton }}</p> -->
        <!-- <p>{{ selectableItemsList }}</p> -->
    </div>
    <div :class="[`relative`, rootClass]" @focusout="handleFocusOut" ref="selectableItemsRoot">
        <button
            :id="props.name"
            ref="selectButton"
            @click="toggleSelect(!isOpen)"
            :class="[
                cn(
                    'transition duration-200 ease-in-out focus:outline-hidden', // Animation
                    'disabled:button-disabled-pointer', // Disabled Button
                    'disabled:button-disabled', // Disabled
                    'relative flex items-center justify-between gap-2', // Layout
                    'cursor-pointer text-sm shadow-xs', // Style
                    'h-10 max-h-full w-full py-2 pr-10 pl-3', // Size
                    'rounded-md', // Shape
                    'bg-overlay',
                    'ring-r-button hocus:ring-2 ring-1',
                    'hover:ring-primary-muted focus:ring-primary focus-within:ring-primary-muted',
                    { 'hocus:ring-0': isOpen },
                    { 'text-foreground-3': placeholder && !selectedItem },
                    props.class,
                ),
            ]"
            :disabled="disabled"
            :title="title ?? 'Make Selection'"
        >
            <span class="truncate">
                {{ selectedItem ? `${prefix}${selectedItem.title}` : placeholder }}
            </span>
            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <slot name="selectButtonIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-5 w-5 text-gray-400"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </slot>
            </span>
        </button>

        <Transition
            enter-active-class="transition ease-out duration-50"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100"
        >
            <OnClickOutside
                v-cloak
                v-if="isOpen"
                :class="[dropdownPosition == 'top' ? `bottom-0 ${menuMargin?.bottom ?? 'mb-11'}` : `top-0 ${menuMargin?.top ?? 'mt-11'}`]"
                class="ring-opacity-5 absolute z-30 mt-1 max-h-56 w-full overflow-clip rounded-md bg-white text-sm shadow-md ring-1 ring-black backdrop-blur-lg dark:bg-neutral-800/70 dark:ring-neutral-700"
                @trigger="toggleSelect(false)"
                @keydown.esc.stop="
                    (event: Event) => {
                        if (isOpen) {
                            toggleSelect(false);
                            event.stopPropagation();
                        }
                    }
                "
                @keydown.down.stop.prevent="
                    (event: Event) => {
                        if (isOpen) {
                            activateNext();
                        } else {
                            toggleSelect(true);
                        }
                        event.preventDefault();
                    }
                "
                @keydown.up.stop.prevent="
                    (event: Event) => {
                        if (isOpen) {
                            activatePrevious();
                        } else {
                            toggleSelect(true);
                        }
                        event.preventDefault();
                    }
                "
                @keydown.enter.stop="
                    //@ts-ignore
                    selectedItem = activeItem;
                    toggleSelect(false);
                "
                @keydown.stop="onKeydown($event)"
            >
                <ul
                    ref="selectableItemsList"
                    class="scrollbar-thin max-h-56 w-full overflow-auto focus:outline-hidden"
                    tabindex="-1"
                    role="listbox"
                >
                    <template v-for="item in items" :key="item.value">
                        <li
                            @click="handleItemClick(item)"
                            @keydown.enter="handleItemClick(item)"
                            @keydown.space="handleItemClick(item)"
                            @focus="handleItemFocus(item)"
                            @mousemove="handleItemHover(item)"
                            :id="item.value"
                            :title="item.title"
                            :data-disabled="item.disabled"
                            :tabindex="isActive(item) ? 0 : -1"
                            :class="{
                                'bg-neutral-100 text-gray-900 dark:bg-neutral-900/70 dark:text-neutral-100': isActive(item),
                                'text-gray-700 dark:text-neutral-300': !isActive(item),
                            }"
                            class="relative flex h-full cursor-pointer items-center py-2 pl-8 focus:rounded-md data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                            role="option"
                            :aria-selected="isActive(item) ? 'true' : 'false'"
                            :data-value="item.value"
                        >
                            <svg
                                v-if="selectedItem == item.value"
                                class="absolute left-0 ml-2 h-4 w-4 stroke-current text-neutral-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span class="block truncate font-medium">{{ item.title }}</span>
                        </li>
                    </template>
                </ul>
            </OnClickOutside>
        </Transition>
    </div>
</template>
