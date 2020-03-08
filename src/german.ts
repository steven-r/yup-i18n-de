import { setLocale, FormatErrorParams } from "yup";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import printValue from "yup/lib/util/printValue";

/**
 * translations for mixed() schema elements
 */
export const mixed = {
  default: "${path} ist nicht gültig",
  required: "${path} ist ein notwendiges Feld",
  oneOf: "${path} muss eine der folgenden Felder enthalten: ${values}",
  notOneOf: "${path} darf keinen der folgenden Werte enthalten: ${values}",
  notType: (params: FormatErrorParams): string => {
    const isCast =
      params.originalValue != null && params.originalValue !== params.value;
    let msg =
      `${params.path} muss vom Typ \`${params.type}\` sein, ` +
      `Der Wert ist aber: \`${printValue(params.value, true)}\`` +
      (isCast
        ? ` (Ursprünglich \`${printValue(params.originalValue, true)}\`).`
        : ".");

    if (params.value === null) {
      msg += `\n Wenn "null" als Wert erlaubt sein soll, dann markieren Sie das Schema mit \`.nullable()\``;
    }

    return msg;
  },
  defined: "${path} muss definiert werden"
};

/**
 * translations for string() schema elements
 */
export const string = {
  length: "${path} muss genau ${length} Zeichen lang sein",
  min: "${path} muss mindestens ${min} Zeichen lang sein",
  max: "${path} darf nicht mehr als ${max} Zeichen enthalten",
  matches: '${path} muss dem folgenden entsprechen: "${regex}"',
  email: "${path} muss eine gültige Email enthalten",
  url: "${path} muss eine gültige URL sein",
  trim: "${path} darf keine Leerzeichen am Anfang/Ende enthalten",
  lowercase: "${path} muss aus Kleinbuchstaben bestehen",
  uppercase: "${path} muss aus Großbuchstaben bestehen"
};

/**
 * translations for number() schema elements
 */
export const number = {
  min: "${path} muss größer oder gleich ${min} sein",
  max: "${path} muss kleiner oder gleich ${max} sein",
  lessThan: "${path} muss kleiner als ${less} sein",
  moreThan: "${path} muss größer als ${more} sein",
  notEqual: "${path} muss ungleich dem Wert ${notEqual} sein",
  positive: "${path} muss eine positive Zahl sein",
  negative: "${path} muss eine negative Zahl sein",
  integer: "${path} muss eine Ganzzahl sein"
};

/**
 * translations for date() schema elements
 */
export const date = {
  min: "${path} muss später liegen als ${min}",
  max: "${path} muss früher als ${max} sein"
};

/**
 * translations for boolean() schema elements.
 *
 * This is a noop for now as all translations necessary are covered with the [[mixed]] element
 */
export const boolean = new Object();

/**
 * Translations for object() schema elements
 *
 * These are usually developer only translations
 */
export const object = {
  noUnknown: "${path} field cannot have keys not specified in the object shape"
};

/**
 * Translations for array() schema elements
 */
export const array = {
  min: "${path} muss mindestens ${min} Elemente enthalten",
  max: "${path} darf maximal ${max} Elemente enthalten"
};

/**
 * Set locate to German for messages from [yup](https://github.com/jquense/yup) messages
 */
export function registerGermanYupLocale(): void {
  setLocale({
    mixed: mixed,
    string: string,
    number: number,
    date: date,
    boolean: boolean,
    object: object,
    array: array
  });
}
