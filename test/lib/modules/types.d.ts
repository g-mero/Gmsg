/// <reference types="node" />
export interface Setting {
    position: string;
    type: string;
    showClose: boolean;
    timeout: number;
    animation: boolean;
    autoClose: boolean;
    content: string;
    onClose: (() => void) | null;
    maxNums: number;
    html: boolean;
}
export interface UserSetting {
    position?: string;
    type?: string;
    showClose?: boolean;
    timeout?: number;
    animation?: boolean;
    autoClose?: boolean;
    content?: string;
    onClose?: (() => void) | null;
    maxNums?: number;
    html?: boolean;
}
export declare const DEFAULTS: Setting;
export declare class Msg {
    settings: Setting;
    id: number;
    timeout: number;
    timer: undefined | NodeJS.Timer;
    $wrapper: Element;
    $elem: HTMLDivElement;
    state: string;
    count: number;
    private Gmsg;
    constructor(Gmsg: any, opts: UserSetting);
    private setState;
    setMsgCount(): void;
    destroy(): void;
    close(): void;
}
