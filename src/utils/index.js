//字符串转base64
export const encode = (str) => {
  return btoa(encodeURI(str));
};

// base64转字符串
export const decode = (base64) => {
  return decodeURI(atob(base64));
};
