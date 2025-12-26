import type { TableRow, UseTableOptions } from './table.types';

import { computed, ref, watch } from 'vue';

export default function useTable<T extends TableRow>(options: UseTableOptions<T>) {
    const itemsPerPage = computed(() => options.itemsPerPage ?? 10);
    const currentPage = ref(1);

    const pageCount = computed(() => Math.ceil(options.data.value.length / itemsPerPage.value));
    const pageData = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value;
        return options.data.value.slice(start, start + itemsPerPage.value);
    });

    function setPage(page: number) {
        currentPage.value = Math.min(Math.max(1, page), pageCount.value);
    }

    function resetPage() {
        currentPage.value = 1;
    }

    watch(
        () => options.data.value,
        (next, prev) => {
            if (options.resetOnDataChange === false) return;

            if (!prev) return resetPage(); // On first load
            if (!next.length || !prev.length) return resetPage(); // Handles empty datasets ?
            if (next.length !== prev.length) return resetPage(); // If length changes (search, data source change)
            if (next[0]?.id !== prev[0]?.id) return resetPage(); // If data changes (first item is different but lengths are the same)
        },
        { immediate: true },
    );

    return {
        // state
        currentPage,
        itemsPerPage,

        // derived
        pageCount,
        pageData,

        // actions
        setPage,
        resetPage,
    };
}
