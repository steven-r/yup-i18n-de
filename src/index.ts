import { setLocale, FormatErrorParams } from "yup";
// @ts-ignore
import printValue from "yup/lib/util/printValue"; 

const mixed = {
  default: '${path} ist nicht gültig',
  required: '${path} ist ein notwendiges Feld',
  oneOf: '${path} muss eine der folgenden Felder enthalten: ${values}',
  notOneOf: '${path} darf keinen der folgenden Werte enthalten: ${values}',
  notType: (params: FormatErrorParams) => {
    let isCast = params.originalValue != null && params.originalValue !== params.value;
    let msg =
      `${params.path} muss vom Typ \`${params.type}\` sein, ` +
      `Der Wert ist aber: \`${printValue(params.value, true)}\`` +
      (isCast
        ? ` (Ursprünglich \`${printValue(params.originalValue, true)}\`).`
        : '.');

    if (params.value === null) {
      msg += `\n Wenn "null" als Wert erlaubt sein soll, dann markieren Sie das Schema mit \`.nullable()\``;
    }

    return msg;
  },
  defined: '${path} muss definiert werden',
};

export let string = {
  length: '${path} muss genau ${length} Zeichen lang sein',
  min: '${path} muss mindestens ${min} Zeichen lang sein',
  max: '${path} darf nicht mehr als ${max} Zeichen enthalten',
  matches: '${path} muss dem folgenden entsprechen: "${regex}"',
  email: '${path} muss eine gültige Email enthalten',
  url: '${path} muss eine gültige URL sein',
  trim: '${path} darf keine Leerzeichen am Anfang/Ende enthalten',
  lowercase: '${path} muss aus Kleinbuchstaben bestehen',
  uppercase: '${path} muss aus Großbuchstaben bestehen',
};

export let number = {
  min: '${path} must be greater than or equal to ${min}',
  max: '${path} must be less than or equal to ${max}',
  lessThan: '${path} must be less than ${less}',
  moreThan: '${path} must be greater than ${more}',
  notEqual: '${path} must be not equal to ${notEqual}',
  positive: '${path} must be a positive number',
  negative: '${path} must be a negative number',
  integer: '${path} must be an integer',
};

export let date = {
  min: '${path} field must be later than ${min}',
  max: '${path} field must be at earlier than ${max}',
};

export let boolean = {};

export let object = {
  noUnknown: '${path} field cannot have keys not specified in the object shape',
};

export let array = {
  min: '${path} field must have at least ${min} items',
  max: '${path} field must have less than or equal to ${max} items',
};

export function registerGermanYupLocale() {
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
