import InitDebugEvent from "../../event/InitDebugEvent";
import {FabaNodeCommand} from "@fabalous/runtime-node/FabaNodeCommand";
import NodeStore from "../../../common/node/NodeStore";

export default class InitDebugNodeCommand extends FabaNodeCommand<NodeStore> {
  execute(event:InitDebugEvent) {

  }
}