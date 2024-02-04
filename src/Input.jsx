import Form from "react-bootstrap/Form";

export const Input = ({submitHandler, handleChange, value}) => {

    

  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        required
        type="text"
        placeholder="Tarea 1..."
        minLength={3}
        maxLength={30}
        onChange={handleChange}
        value={value}
      />
    </Form>
  );
};
