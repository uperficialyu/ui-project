import * as React from 'react';
import Form from './form';
import { useState, Fragment } from 'react';
// import Validator, {noError} from './validator';
// import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
  const [formDate] = useState({
    userName: '',
    password: ''
  });

  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'image', label: '头像', input: {type: 'text'}},
  ]);

  return (
    <Fragment>
      <Form value={formDate} fields={fields}
        buttons={
          <Fragment>
            <button>提交</button>
            <button>返回</button>
          </Fragment>
        }
      />
    </Fragment>
  )
}

export default FormExample;