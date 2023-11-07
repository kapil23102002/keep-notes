import React from "react";
import Form from "react-bootstrap/Form";

const CreateNotes = () => {
  return (
    <div style={{ width: "300px", marginLeft: "500px" }}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Notes Here..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreateNotes;
