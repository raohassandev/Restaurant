/// <reference types="libphonenumber-js" />
import parsePhoneNumber from "libphonenumber-js";
const validPhoneNumber = (value: string) => {
  try {
    const phoneNumberObject = parsePhoneNumber(value);
    return phoneNumberObject && phoneNumberObject.isValid() ? true : false;
  } catch (error) {
    return false;
  }
};
export const regexTest = (value: string, regex: Record<string, any>) => {
  if (regex.regex === "phone") {
    const isValidPhone = validPhoneNumber(value);
    return !isValidPhone ? regex.error : null;
  }

  const isValid = value ? regex.regex.test(value) : false;
  console.log(regex.regex, isValid, !isValid ? regex.error : null);
  return !isValid ? regex.error : null;
};
export const REGEX = {
  NAME: {
    regex: /^.{3,30}$/,
    error: "Length must be 3 to 30 charachters.",
  },
  SHORT_TEXT: {
    regex: /^.{10,100}$/,
    error: "Length must be 10 to 100 charachters.",
  },
  POSITIVE_NUMBER: {
    regex: new RegExp(/^[0-9]*\.?[0-9]*$/),
    error: "Not a valid number.",
  },
  PHONE_NUMBER: {
    regex: "phone",
    error: "Not a valid phone number.",
  },
};
