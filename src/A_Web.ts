import FabaImStore from "@fabalous/core/store/FabaImStore";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";

import Layout from "./common/web/RootLayout";
import Routes from "./common/Routes";
import WebStore from "./common/StoreWeb";
import DebugWebMediator from "./debug/DebugWebMediator";
import SetupReceiverEvent from "./debug/event";

class A_Web extends FabaRuntimeWeb{
    constructor(store:FabaImStore<WebStore>){
        super(store as any ,Routes ,Layout, module);

        FabaRuntimeWeb.addMediator(DebugWebMediator);
        new SetupReceiverEvent().dispatch();

        let host: string = window.location.host + "/api/";
        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(window.location.protocol + "//" + host), "api");
    }
}

new A_Web(new FabaImStore<WebStore>(new WebStore()));