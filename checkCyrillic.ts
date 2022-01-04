// @ts-nocheck
import {regex} from "./regex";
export function checkCyrillic(customMessage) {
  console.log(`function = ${customMessage}`);
  customMessage = customMessage.match(regex)
  if (customMessage === null){
    return `there is no valid character`
  }

  return customMessage.join("");
}