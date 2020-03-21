import * as React from 'react';
import Form from './Form';
import { useState, Fragment } from 'react';
// import Validator, {noError} from './validator';
// import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
  const [formDate, setFormDate] = useState({
    userName: '',
    password: ''
  });

  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'image', label: '头像', input: {type: 'text'}},
  ]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formDate)
  }

  return (
    <Fragment>
      <Form value={formDate} fields={fields}
        buttons={
          <Fragment>
            <button>提交</button>
            <button>返回</button>
          </Fragment>
        }
        onChange={setFormDate}
        onSubmit={onSubmit}
      />
    </Fragment>
  )
}

export default FormExample;