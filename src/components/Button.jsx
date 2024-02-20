import './Button.css';

function Button(props) {

  const buttonClick = () =>{
    props.onClick()
  }

  return (
    <>
      <button onClick={buttonClick}>Interact</button>
    </>
  );
}

export default Button;