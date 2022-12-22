import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useApp } from '@provider/app.provider';
import { useLogin } from '@resources/api/auth';
import { Button, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style.module.less';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useApp();

  const [authLogin, { data, loading, error }] = useLogin();
  const [form] = Form.useForm();

  useEffect(() => {
    if (error) {
      message.error(error.message);
    }

    if (data) {
      setUser(data?.data?.role);
      setToken(data?.data?.tokenData?.token);
      message.success(data?.message);

      navigate('/');
    }
  }, [error, data]);

  const onFinish = (values: any) => {
    authLogin({ data: { username: values.username, password: values.password } });
  };

  return (
    <div className={style.wrapper}>
      <Form
        form={form}
        onFinish={onFinish}
        className={style.boxForm}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <div className={style.header}>
          <span>Login</span>
          <p>Silahkan masuk ke akun anda</p>
        </div>
        <Form.Item name="username" rules={[{ required: true, message: 'Masukkan username anda!' }]}>
          <Input name="username" autoFocus prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: 'Masukkan password anda!' }]}>
          <Input.Password name="password" prefix={<LockOutlined />} />
        </Form.Item>

        <div className="mt-3">
          <Button type="primary" className="btn-submit" htmlType="submit" disabled={loading}>
            Masuk
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
