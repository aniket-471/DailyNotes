import React from "react";

function Note(props) {

  function deleteitem()
  {
    props.removeitem(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteitem}>DELETE</button>
    </div>
  );
}

export default Note;
