const {
  withNativeWind: withNativeWind
} = require("nativewind/metro");

require("ts-node/register");
module.exports = require("./metro.config.ts");