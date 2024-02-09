import './Button.css';

function Button(props) {
  const API_URL = 'http://localhost:8080/api/interaction/'
  const interactionData = {
    type: "Click",
    date: new Date().toLocaleString()
  }

  const sendInteraction = () => {
    fetch(API_URL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(interactionData), // body data type must match "Content-Type" header
    })
    .then((response)=> response.json())
    .then( error => console.log(error))



  }

  return (
    <>
      <button onClick={sendInteraction}>Interact</button>
      <p></p>
    </>
  );
}

export default Button;