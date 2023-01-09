import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useApp } from '@provider/app.provider';
import { useLogin } from '@resources/api/auth.rest';
import { LoginInput } from '@resources/input/auth.input';
import { Button, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style.module.less';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useApp();

  const [authLogin, { data, loading: authLoading, error: authError }] = useLogin();
  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      setUser(data?.data?.role);
      setToken(data?.data?.tokenData?.token);
      message.success(data?.message);

      navigate('/', { replace: true });
    }

    if (authError) {
      const arKey = Object.values(authError.response?.data.errors);

      message.error(arKey[0] as any);
    }
  }, [authError, authLoading]);

  const onFinish = (values: LoginInput) => {
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
          <Button type="primary" className="btn-submit" htmlType="submit" disabled={authLoading}>
            Masuk
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
