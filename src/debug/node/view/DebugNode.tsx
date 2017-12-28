import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import * as React from "react";

interface IInitDebugProps{

}

export default class InitDebug extends FabaWebBaseComponent<IInitDebugProps>{
    constructor(props){
        super(props);
    }

    render(): React.ReactElement<IInitDebugProps> {
        return(
        <div>
        </div>
        )
    }
}