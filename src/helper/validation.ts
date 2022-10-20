export const isValidFirstName = (name: string): boolean => {
  if (name.match(/^([0-9])/)) return false
  if (name.length < 2) return false

  return true
}

export const isValidLastName = (name: string): boolean => {
  if (!name) return true
  if (name.match(/^([0-9])/)) return false
  if (name.length < 2) return false

  return true
}

export const isValidEmail = (email: string): boolean => {
  return Boolean(
    String(email)
      .replaceAll(' ', '')
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

export const isValidPassword = (password: string): boolean => {
  if (password.length < 8) return false;
  if (password.length > 24) return false;
  if (password.match(/^([0-9]&[A-Z]&[a-z])/)) return false;

  return true;
};
