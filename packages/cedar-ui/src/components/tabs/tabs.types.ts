// Tabs Types

export type TabsOrientation = 'horizontal' | 'vertical';

// Tabs

export interface TabsProps {
    defaultValue: string;
    orientation?: TabsOrientation;
}

export interface TabsTriggerProps {
    value: string;
}

export interface TabsContentProps {
    value: string;
}

export interface TabsMarkerProps {
    orientation?: TabsOrientation;
}
