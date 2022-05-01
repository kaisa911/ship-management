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
const commonCallApi = (dispatch, formData, requestUrl, type) => {
  return request.post(requestUrl, formData).then((res) => {
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
const commonAction = (requestUrl, formData, type) => {
  return (dispatch) => {
    return commonCallApi(dispatch, requestUrl, formData, type);
  };
};

/**
 * 获取列表
 * @param formData
 * @returns {function(*)}
 */
const getList = (formData) => {
  return commonAction(api.getUserInfo, formData, GET_USER_INFO);
};

export default {
  getList,
};
