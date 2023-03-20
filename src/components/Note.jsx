import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <AiFillDelete />
      </button>
    </div>
  );
}

export default Note;
