function telephoneCheck(str) {
  return /(^(1\s\d{3}|1\s?\(\d{3}\)|\d{3}|\(\d{3}\))\s?-?\d{3}\s?-?\d{4}$|^\d{10}$)/.test(str);
}

telephoneCheck("555-555-5555");
