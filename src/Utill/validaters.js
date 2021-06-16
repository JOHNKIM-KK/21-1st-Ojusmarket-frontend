export function validateId(identity) {
  if (identity === '') {
    return true;
  }
  const idreg = /^[a-z0-9]{5,15}/g;
  const isIdValid = idreg.test(identity);
  return isIdValid;
}

export function validateEmail(email) {
  if (email === '') {
    return true;
  }
  //email체크
  const emailreg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const isEmailValid = emailreg.test(email);
  return isEmailValid;
}

export function validatePhone(phone) {
  if (phone === '') {
    return true;
  }
  //email체크
  const phonereg = /^\d{3}\d{3,4}\d{4}$/;
  const isPhoneValid = phonereg.test(phone);
  return isPhoneValid;
}
