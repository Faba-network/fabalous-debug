import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import StoreWeb from "../../common/StoreWeb";
import {ReceiveDataEvent} from "../event";

export default class ReciveDataCommand extends FabaWebCommand<StoreWeb> {
    execute(event: ReceiveDataEvent) {

    }

    result(event: ReceiveDataEvent) {

    }
}