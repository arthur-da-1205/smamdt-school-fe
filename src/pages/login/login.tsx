import FormComponent from '@components/form.component';
import React from 'react';

import style from './style.module.less';

const LoginPage: React.FC = () => {
  return (
    <div className={style.container}>
      <FormComponent />
    </div>
  );
};

export default LoginPage;
