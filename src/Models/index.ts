import CONVERSIONS from "../Constants/conversions";
import CURRENCIES from "../Constants/currencies";

// types are generated from Constants folder
export type CurrenciesTypes = keyof typeof CURRENCIES;
export type ConversionTypes = keyof typeof CONVERSIONS;