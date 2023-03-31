import { Msg, Setting, UserSetting } from './types';
interface OMsg {
    inst: Msg;
    config: string;
}
export declare class Gmsg {
    version: string;
    instCount: number;
    oMsgs: OMsg[];
    setting: Setting;
    constructor();
    config(cfg: UserSetting): void;
    info(txt: string, config?: UserSetting): Msg;
    warning(txt: string, config?: UserSetting): Msg;
    success(txt: string, config?: UserSetting): Msg;
    error(txt: string, config?: UserSetting): Msg;
    loading(txt: string, config?: UserSetting): Msg;
    remove(id: number): void;
    closeAll(): void;
}
export {};
