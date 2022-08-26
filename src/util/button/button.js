import './Button.css'
export const GREENBUTTON = (props) => {
  return (
    <button className='button button2' onClick={props.onClick}>{props.title}</button>
  );
}

export const REDBUTTON = (props) => {
    return (
        <button className='button button3' onClick={props.onClick}>{props.title}</button>
      );
  }