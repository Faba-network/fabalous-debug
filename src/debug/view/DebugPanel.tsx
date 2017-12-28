import * as React from 'react';
import {style} from "typestyle";

interface IDebugPanelProps {
}

export default class DebugPanel extends React.PureComponent<IDebugPanelProps> {
    render() {
        return (
            <div className={Style.containerStyle}>sdfdss</div>
        )
    }
}

namespace Style{
    export const containerStyle = style({
        backgroundColor:"#232323",
        width:"100vw",
        height:"100vh",
        color:"#c0c0c0"
    });
}