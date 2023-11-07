import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CreateNotes = (props) => {
  const [note, setNote] = useState({
    title: "",
    desc: "",
  });

  const InputEvent = (e) => {
    // const [name, value] = e.target;
    const name = e.target.name;
    const value = e.target.value;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const AddEvent = () => {
    props.passNote(note);
    setNote({ title: "", desc: "" });
  };

  return (
    <div style={{ width: "300px", marginLeft: "500px" }}>
      <Form>
        <Form.Group className="mb-3" Id="econtrolxampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={note.title}
            name="title"
            onChange={InputEvent}
            placeholder="Enter Your Notes Here..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            rows={3}
            value={note.desc}
            name="desc"
            onChange={InputEvent}
            placeholder="Enter Your Description Here..."
          />
        </Form.Group>
        <Button onClick={AddEvent} note={note}>
          ➕
        </Button>
      </Form>
    </div>
  );
};

export default CreateNotes;
