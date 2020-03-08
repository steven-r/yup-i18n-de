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
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  notEqual: "${path} must be not equal to ${notEqual}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};

/**
 * translations for date() schema elements
 */
export const date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};

/**
 * translations for boolean() schema elements.
 *
 * This is a noop for now as all translations necessary are covered with the @see mixed element
 */
export const boolean = {};

/**
 * Translations for object() schema elements
 *
 * These are usually developer only translations
 */
export const object = {
  noUnknown: "${path} field cannot have keys not specified in the object shape"
};

/**
 * Translations for object() schema elements
 */
export const array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items"
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
