import './Button.css';
export const GREENBUTTON = (props) => {
  return (
    <button className='button green' onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export const REDBUTTON = (props) => {
  return (
    <button className='button red' onClick={props.onClick}>
      {props.title}
    </button>
  );
};
