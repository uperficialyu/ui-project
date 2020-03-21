import * as React from 'react';

interface FormValue {
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
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map(f=>
        <div>
          {f.label}
          <input value={formData[f.name]} type={f.input.type} onChange={onInputChange}/>
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  )
};

export default Form;
