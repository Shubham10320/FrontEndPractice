import btn from './Button.module.css';

function Button(props) {
  console.log(props)
  const{text, click, disable}=props
  console.log(click)
  return <button data-testid="common-button" className={btn.button} onClick={click} disabled={disable}>{text}</button>;
}

export default Button;
