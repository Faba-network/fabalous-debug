import FabaEvent from "@fabalous/core/FabaEvent";

export default class LogDebugEvent extends FabaEvent {
    constructor(obj:any) {
        super("LogDebugEvent");
    }
}