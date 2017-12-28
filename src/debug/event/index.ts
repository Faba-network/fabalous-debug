import FabaEvent from "@fabalous/core/FabaEvent";

export class ConnectToServerEvent extends FabaEvent {
    constructor() { super("ConnectToServerEvent"); }
}

export class InitDebugEvent extends FabaEvent {
    view:any;

    constructor() {
        super("InitDebugEvent");
    }
}

export class LogDebugEvent extends FabaEvent {
    constructor(obj:any) {
        super("LogDebugEvent");
    }
}

export class ReceiveDataEvent extends FabaEvent {
    constructor(){ super("ReciveDataEvent") }
}

export default class SetupReceiverEvent extends FabaEvent {
    constructor() { super("SetupReceiverEvent"); }
}