import {FabaWebMediator} from "@fabalous/runtime-web/FabaWebMediator";
import InitDebugCommand from "./command/InitDebugCommand";
import {InitDebugEvent, ReceiveDataEvent,} from "./event";

export default class DebugWebMediator extends FabaWebMediator {
    registerCommands():void {
        this.addCommand(InitDebugEvent, InitDebugCommand);
        this.addCommand(ReceiveDataEvent, InitDebugCommand);
    }
}