import * as React from "react";
import {ReactElement} from "react";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface IRootLayoutProps{
    childs:any;
}

export default class RootLayout extends FabaWebBaseComponent<IRootLayoutProps>{
    constructor(props){
        super(props);
    }

    render() {
        if (process.env.NODE_ENV == "development") {
            let AppContainer = require('react-hot-loader').AppContainer;
            return (
                <AppContainer>
                    {this.renderContent()}
                </AppContainer>
            );
        } else {
            return this.renderContent();
        }
    }

    renderContent(): ReactElement<any> {
        return(
            <div>
                {this.props.childs}
            </div>
        )
    }
}