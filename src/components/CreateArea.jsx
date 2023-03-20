import React, { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

const CreateArea = (props) => {
  const [noteData, setNotedata] = useState({
    title: "",
    content: ""
  });

  const [isExpend, setExpend] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNotedata({ ...noteData, [name]: value });
  };

  const expend = () => {
    setExpend(true);
  };

  const handleSubmit = (e) => {
    props.onAdd(noteData);
    setNotedata({
      title: "",
      content: ""
    });
    e.preventDefault();
    setExpend(false);
  };
  return (
    <div>
      <form>
        {isExpend && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={noteData.title}
          />
        )}
        <textarea
          onClick={expend}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpend ? 3 : 1}
          value={noteData.content}
        />
        <button onClick={handleSubmit}>
          <MdOutlineAddCircle />
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
