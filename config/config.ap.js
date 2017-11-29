var WEB_BASE_URL = process.env.WEB_BASE_URL || "http://localhost:8080/";

function define(name, value){
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

exports.globUsage = {
    cookie:{},
    cashierSessionSeq:27,
    patronSessionSeq:27,
    vaultSessionSeq:27,
    machineIdx:334124,
    floorIdx:1,
    collectSeq:649,
    memberSerial:'00001',
    sectionSerial:'AE',
    login:'./login/login',
    filePatch:{
        accounting:'./accounting/accounting',
        collection:'./collection/collection',
        jackpotPlan:'./jackpotPlan/jackpotPlan',
        visualCasino:'./visualCasino/visualCasino',
        historyLog:'./historyLog/historyLog',
        operatorInfo:'./operatorInfo/operatorInfo',
        advanceSearch:'./advanceSearch/advanceSearch',
        pmonitor:'./pmonitor/pmonitor'
    }
}

define("WEB_BASE_URL",WEB_BASE_URL);
