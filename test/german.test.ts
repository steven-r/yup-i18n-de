import { registerGermanYupLocale, mixed } from "../src/german";
import * as yup from "yup";

test("setLocale can be called", () => {
  expect(typeof registerGermanYupLocale === "function").toBe(true);
});

test("mixed fields can be changed", () => {
  const old = mixed.default;
  mixed.default = "test";
  expect(mixed.default).not.toBe(old);
  expect(mixed.default).toBe("test");
});

test("Check successfull function call", () => {
  registerGermanYupLocale();
  expect(yup.object()).not.toBeNull();
});

describe("Check mixed texts", () => {
  test.skip("mixed default", async () => {
    const schema = yup.object({
      field: yup.number().test("xxx", () => false)
    });
    await schema
      .validate({ field: undefined })
      .then(result => {
        expect(result).not.toBeNull();
      })
      .catch(e => console.log(e));
  });

  test("mixed required", async () => {
    const schema = yup.object({
      field: yup.number().required()
    });
    await schema
      .validate({})
      .catch(e =>
        expect(e).toEqual(
          new yup.ValidationError(
            "field ist ein notwendiges Feld",
            null,
            "field"
          )
        )
      );
  });

  test("mixed notType", async () => {
    const schema = yup.object({
      field: yup.string().required()
    });
    await schema
      .validate({ field: null })
      .catch(e =>
        expect(e).toEqual(
          new yup.ValidationError(
            'field muss vom Typ `string` sein, Der Wert ist aber: `null`.\n Wenn "null" als Wert erlaubt sein soll, dann markieren Sie das Schema mit `.nullable()`',
            null,
            "field"
          )
        )
      );
  });

  test("mixed notType number cast", async () => {
    const schema = yup.object({
      field: yup.number().required()
    });
    await schema
      .validate({ field: "demo" })
      .catch(e =>
        expect(e).toEqual(
          new yup.ValidationError(
            'field muss vom Typ `number` sein, Der Wert ist aber: `NaN` (Ursprünglich `"demo"`).',
            null,
            "field"
          )
        )
      );
  });
});
