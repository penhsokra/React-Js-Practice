import React from 'react';

function Form(props) {
  //sample data
  // var InputData = [
  //   {
  //     type: 'text',
  //     name: 'name',
  //     placeholder: 'name',
  //     onChange: (e) => handleValueChanges(e),
  //   },
  //   {
  //     type: 'select',
  //     name: 'category_id',
  //     onChange: (e) => handleValueChanges(e),
  //   },
  //   {
  //     type: 'number',
  //     name: 'full_price',
  //     placeholder: 'pirce',
  //     onChange: (e) => handleValueChanges(e),
  //   },
  // ];
  return (
    <div className={props.className} style={props.style}>
      {props.InputData
        ? props.InputData.map((data, i) => {
            return (
              <div className='row' key={i}>
                <div className='col-75'>
                  {data.type === 'select' ? (
                    <select name={data.name} onChange={data.onChange}>
                      <option>Select category</option>
                      {props.Category
                        ? props.Category.map((a, i) => {
                            return (
                              <option key={i} value={a.category_id}>
                                {a.name}
                              </option>
                            );
                          })
                        : ''}
                    </select>
                  ) : (
                    <input
                      type={data.type}
                      name={data.name}
                      placeholder={data.placeholder}
                      onChange={data.onChange}
                    />
                  )}
                </div>
              </div>
            );
          })
        : ''}

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
