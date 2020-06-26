'use strict';

const isSixtyNine = (val) => {
    if (val == 69 ||
        typeof val === "string" && val.match(/sixty( |-)?nine/i) ||
        val === "LXIX") {
        console.log("nice");
        return "nice";
    }
    return false;
}

module.exports = isSixtyNine;