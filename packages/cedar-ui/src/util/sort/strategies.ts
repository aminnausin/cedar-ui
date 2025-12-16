export const CompareStrategies = {
    stringInsensitive: (a: any, b: any) => normalizeString(a).localeCompare(normalizeString(b)),

    date: (a: any, b: any) => new Date(a).getTime() - new Date(b).getTime(),

    number: (a: any, b: any) => parseFloat(a) - parseFloat(b),
};

function normalizeString(value: any): string {
    return String(value ?? '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();
}
