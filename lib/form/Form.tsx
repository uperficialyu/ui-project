import * as React from 'react';
import Input from '../input/input';
import './form.scss';

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{name: string, label: string, input: {type: string}}>;
  buttons: React.ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>{
    e.preventDefault();
    props.onSubmit(e);
  }
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <table>
        {props.fields.map(f=>
          <tr key={f.name}>
            <td>{f.label}</td>
            <td>
              <Input
                value={formData[f.name]}
                type={f.input.type}
                onChange={(e) => onInputChange(f.name, e.target.value)}
              />
            </td>
          </tr>
        )}
        <div>
          {props.buttons}
        </div>
      </table>
    </form>
  )
};

export default Form;
