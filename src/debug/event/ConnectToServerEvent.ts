import FabaEvent from "@fabalous/core/FabaEvent";

export default class ConnectToServerEvent extends FabaEvent {
    constructor() {
        super("ConnectToServerEvent");
    }
}