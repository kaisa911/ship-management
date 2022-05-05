import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { encode, decode } from '@/utils/index';
import Actions from '@/actions';
import md5 from 'md5';
import './index.less';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getCookie(name) {
    let arr = [];
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    }
    return '';
  }

  const initialUsername = getCookie('username');
  const initialPassword = decode(getCookie('token'));

  const saveLocalStorage = (values) => {
    const { username, password } = values;
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('token', md5(password));
  };

  const rememberPassword = (values) => {
    const { username, password } = values;
    const base64Password = encode(password);
    document.cookie = `username=${username}`;
    document.cookie = `token=${base64Password}`;
  };

  const onFinish = async (values) => {
    const { username, password } = values;
    console.log(Actions);
    await Actions.getUserInfo(dispatch, {
      username,
      password: md5(password),
    });
    saveLocalStorage(values);
    if (values.remember) {
      rememberPassword(values);
    }
    navigate('/ship-management', { replace: true });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <div className="login-info-wraps">
        <div className="title">船舶能源管理服务系统</div>
        <div className="sub-title">Ship Energy Management Service System</div>
        <div className="form-wraps">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
              username: initialUsername,
              password: initialPassword,
            }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入账号',
                },
              ]}
            >
              <Input addonBefore={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input.Password addonBefore={<KeyOutlined />} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 16,
              }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
