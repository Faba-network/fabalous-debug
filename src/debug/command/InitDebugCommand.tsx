import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import * as React from "react";
import StoreWeb from "../../common/StoreWeb";
import {InitDebugEvent} from "../event";
import DebugPanel from "../view/DebugPanel";

export default class InitDebugCommand extends FabaWebCommand<StoreWeb> {
    execute(event: InitDebugEvent) {
        event.view = <DebugPanel />;
        event.callBack();
    }
}