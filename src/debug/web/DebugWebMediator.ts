import {FabaWebMediator} from "@fabalous/runtime-web/FabaWebMediator";
import InitDebugEvent from "./../event/InitDebugEvent";
import InitDebugWebCommand from "./command/InitDebugWebCommand";
export default class DebugWebMediator extends FabaWebMediator {
    registerCommands():void {
        this.addCommand(InitDebugEvent, InitDebugWebCommand);
    }
}