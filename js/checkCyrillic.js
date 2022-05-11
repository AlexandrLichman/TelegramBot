"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCyrillic = void 0;
const regex_1 = require("./regex");
function checkCyrillic(customMessage) {
    console.log(`function = ${customMessage}`);
    customMessage = customMessage.match(regex_1.regex);
    if (customMessage === null) {
        return `there is no valid character`;
    }
    return customMessage.join("");
}
exports.checkCyrillic = checkCyrillic;
