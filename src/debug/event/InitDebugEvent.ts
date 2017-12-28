import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitDebugEvent extends FabaEvent {

    view:any;

    constructor() {
        super("InitDebugEvent");
    }
}