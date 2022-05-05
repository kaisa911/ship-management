// 字符串转base64
export const encode = (str) => btoa(encodeURI(str));

// base64转字符串
export const decode = (base64) => decodeURI(atob(base64));
