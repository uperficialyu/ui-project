import * as React from 'react';

interface Props {
  value: {[K: string]: any};
  fields: Array<{name: string, label: string, input: {type: string}}>;
  buttons: React.ReactFragment;
}

const Form: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.fields.map(f=>
        <div>
          {f.label}
          <input type={f.input.type}/>
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </div>
  )
};

export default Form;
