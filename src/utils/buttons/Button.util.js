import './Button.util.css'
const GREENBUTTON = (props) => {
  return (
    <button className='button button2' onClick={props.onClick}>{props.title}</button>
  );
}

const REDBUTTON = () => {
    return (
        <button className='button button3' onClick={props.onClick}>{props.title}</button>
      );
  }
  const BLACKBUTTON = () => {
    return 0;
  }
export {GREENBUTTON,REDBUTTON,BLACKBUTTON}