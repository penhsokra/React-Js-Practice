import './Button.util.css'

const GREENBUTTON = (props) => {
  return (
    <button className='button button3' onClick={props.onClick}></button>
  );
}

const REDBUTTON = () => {
    return 0;
  }
  const BLACKBUTTON = () => {
    return 0;
  }

export {GREENBUTTON,REDBUTTON,BLACKBUTTON}