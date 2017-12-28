import * as React from "react";

import InitDebugEvent from "../../event/InitDebugEvent";
import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import WebStore from "../../../common/web/WebStore";
import DebugWeb from "../view/DebugWeb";

export default class InitDebugWebCommand extends FabaWebCommand<WebStore> {
    execute(event: InitDebugEvent) {
        event.view = React.createElement(DebugWeb,{});
        event.callBack();
    }
}