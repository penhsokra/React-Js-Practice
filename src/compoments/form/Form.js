import React from 'react';

function Form(props) {
  return (
    <div className={props.className} style={props.style}>
      {props.inputData.map((data, i) => {
        return (
          <div className='row' key={i}>
            <div className='col-75'>
              <input
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                onChange={data.onChange}
              />
            </div>
          </div>
        );
      })}
      <div className='row'>
        <input
          type='submit'
          value={props.buttonTitle}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

export default Form;
