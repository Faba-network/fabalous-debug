import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import * as React from "react";

interface IInitDebugProps{

}

export default class DebugWeb extends FabaWebBaseComponent<IInitDebugProps>{
    constructor(props){
        super(props);
    }

    render(): React.ReactElement<IInitDebugProps> {
        return(
        <div>

            <input placeholder="Remote URL" />
            <input placeholder="Debug Code" />
            <button>Connect</button>
        </div>
        )
    }
}