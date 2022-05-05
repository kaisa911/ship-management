import { useDispatch } from 'react-redux';
import request from '@/utils/request';
import api from '@/utils/api';
import { GET_USER_INFO } from '@/utils/actionTypes.js';

/**
 * callApi
 * @param dispatch
 * @param formData
 * @param requestUrl
 * @param type  设置action的type
 * @returns {function(*)}
 */
const commonCallApi = (dispatch, method, requestUrl, formData, type) => {
  console.log(dispatch, formData, requestUrl);
  return request[method](requestUrl, formData).then((res) => {
    console.log(res);
    if (res.code === 200) {
      const data = type
        ? dispatch({
            type,
            data: res.data,
          })
        : res;
      return Promise.resolve(data);
    }
    return Promise.reject(res);
  });
};

/**
 * 公共action
 * @param requestUrl
 * @param formData
 * @param type  设置action的type
 * @returns {function(*)}
 */
const commonAction = (method, requestUrl, formData, type) => {
  return (dispatch) => {
    return commonCallApi(dispatch, method, requestUrl, formData, type);
  };
};

/**
 * 获取列表
 * @param formData
 * @returns {function(*)}
 */
export const getUserInfo = (dispatch, formData = {}) => {
  if (dispatch) {
    return commonCallApi(dispatch, 'get', api.getUserInfo, formData, GET_USER_INFO);
  }
  return commonAction('get', api.getUserInfo, formData, GET_USER_INFO);
};

export default {
  getUserInfo,
};
