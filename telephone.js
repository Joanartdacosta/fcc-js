function telephoneCheck(str) {
  const phone = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?(\d{4})$/;

  return phone.test(str);
}

telephoneCheck("555-555-5555");

module.exports = telephoneCheck;
