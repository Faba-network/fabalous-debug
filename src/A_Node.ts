import FabaStore from "@fabalous/core/store/FabaStore";
import FabaRuntimeNode from "@fabalous/runtime-node/FabaRuntimeNode";
import NodeStore from "./common/node/NodeStore";

class A_Server extends FabaRuntimeNode {
    constructor(data:FabaStore<NodeStore>){
        super(data,6000);
    }
}

new A_Server(new FabaStore<NodeStore>(new NodeStore()));