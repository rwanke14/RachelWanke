import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "../Container";
import Row from "../Row";
import axios from "axios"
import "./style.css"

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState();
  const [submit, setSubmit] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let data = {name, email, message, subject}

    setSubmit({
        ...submit,
        buttonText: "Sending..."
    })

    axios({
        method: 'post',
        url: 'http://localhost:3001/api/contact',
        data: {
          Name: name.value,
          Email: email.value,
          Subject: subject.value,
          Message: message.value
        }
      }).then((res) => {
          console.log(data)
      });
    
  };

//   const resetForm = () => {
//     setName(name == '')
//     setEmail(email == '')
//     setSubject(subject == '')
//     setMessage(message == '')
//     setSubmit({
//         sent: false,
//         buttonText: 'Submit',
//         err: ''
//     })






  return (
    <Form>
      <Form.Group controlId="formBasicEmail" onSubmit={handleSubmit}>
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"
        className="form-control"
        name="name"
        onChange={e => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         className="form-control"
         name="email"
         onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicSubject">
        <Form.Label>Subject:</Form.Label>
        <Form.Control type="subject" placeholder="Enter subject" 
         className="form-control"
         name="subject"
         onChange={e => setSubject(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3}
         className="form-control"
         name="message"
         onChange={e => setMessage(e.target.value)} />
      </Form.Group>

      <Button className="button" variant="primary" type="submit" onClick={handleSubmit}>Submit
      </Button>
    </Form>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <Container>
    //       <Row>
    //         <input
    //           className="form-control"
    //           type="text"
    //           placeholder="name"
    //           name="name"
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </Row>
    //       <Row>
    //         <input
    //           className="form-control"
    //           type="text"
    //           placeholder="email"
    //           name="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </Row>
    //       <Row>
    //         <input
    //           className="form-control"
    //           type="text"
    //           placeholder="subject"
    //           name="subject"
    //           onChange={(e) => setSubject(e.target.value)}
    //         />
    //       </Row>
    //       <Row>
    //         <input
    //           className="form-control"
    //           type="text"
    //           placeholder="message"
    //           name="message"
    //           onChange={(e) => setMessage(e.target.value)}
    //         />
    //       </Row>
    //       <button className="btn btn-success" type="submit">
    //         Submit
    //       </button>
    //     </Container>
    //   </form>
    // </div>
  );
}

export default ContactForm;
