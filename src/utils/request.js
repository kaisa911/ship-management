import axios from 'axios';

const reqConfig = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

/**
 * Post请求
 *
 * @param {string} url 接口文档上的url地址
 * @param {*} reqData 请求数据
 */
function post(url, reqData, config = reqConfig) {
  return axios
    .post(url, reqData, config)
    .then((response) => response.data)
    .then((res) => {
      // TODO: some redirect handling
      // console.log(res);
      return res;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

function get(
  url,
  config = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
) {
  return axios({
    method: 'get',
    url,
    ...config,
  })
    .then((response) => response.data)
    .then((res) => {
      // TODO: some redirect handling
      // console.log(res, 2333);
      return res;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export function requestForm(url, reqData, config = {}) {
  return axios
    .post(url, reqData, config)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
}

export default { post, get };
