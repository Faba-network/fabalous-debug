console.log("test");

module.exports.default = {
    mediator: require("./web/DebugWebMediator").default,
    initEvent: require("./event/InitDebugEvent").default
};


if (process.env.FABALOUS_RUNTIME == "node"){
    module.exports = {
      mediator: require("./node/DebugNodeMediator").default,
      initEvent: require("./event/InitDebugEvent").default
    };
}

if (process.env.FABALOUS_RUNTIME == "web"){

}

if (process.env.FABALOUS_RUNTIME == "cordova"){
    module.exports = {
        mediator: require("./cordova/DebugCordovaMediator").default,
        initEvent: require("./event/InitDebugEvent").default
    };
}

if (process.env.FABALOUS_RUNTIME == "native"){
    module.exports = {
        mediator: require("./native/DebugNativeMediator").default,
        initEvent: require("./event/InitDebugEvent").default
    };
}