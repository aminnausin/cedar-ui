import type { Component } from 'vue';

export interface RelativeHoverCardProps {
    content?: string;
    positionClasses?: string;
    hoverCardDelay?: number;
    hoverCardLeaveDelay?: number;
    iconHidden?: boolean;
    icon?: Component;
}

export interface HoverCardProps extends RelativeHoverCardProps {
    contentTitle?: string;
    margin?: number;
    paddingLeft?: number;
    scrollContainer?: 'body' | 'window';
    disabled?: boolean;
}
