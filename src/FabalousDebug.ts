import LogDebugEvent from "./debug/event/LogDebugEvent";
/**
 * Created by creativecode on 25.01.17.
 */

class FabalousDebug{
    FABA_DEBUG_LEVEL:number = 1;

    static debug(object:any, type:FabalousDebugTypes = FabalousDebugTypes.LOG){
        if (Number(process.env.debug) <= 1) return;
        new LogDebugEvent(object).dispatch();
        //Mediator ovveride ?!

        switch(type){
            case FabalousDebugTypes.LOG:
                console.log(object);
                break;
            case FabalousDebugTypes.ERROR:
                console.error(object);
                break;
            case FabalousDebugTypes.INFO:
                console.info(object);
                break;
            case FabalousDebugTypes.TABLE:
                console.table(object);
                break;
            case FabalousDebugTypes.TRACE:
                console.trace(object);
                break;
        }


    }
}

enum FabalousDebugTypes{
    LOG,
    INFO,
    ERROR,
    TABLE,
    TRACE
}
