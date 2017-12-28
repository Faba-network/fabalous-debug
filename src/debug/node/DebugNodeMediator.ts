import {FabaNodeMediator} from "@fabalous/runtime-node/FabaNodeMediator";
import InitDebugEvent from "./../event/InitDebugEvent";
import InitDebugNodeCommand from "./command/InitDebugNodeCommand";
export default class DebugNodeMediator extends FabaNodeMediator {
    registerCommands():void {
        this.addCommand(InitDebugEvent, InitDebugNodeCommand);
    }
}