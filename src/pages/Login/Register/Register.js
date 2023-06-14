import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleSubmit =(event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(retust =>{
            const user = retust.user;
            console.log(user);
        })
        .catch(error =>console.error(error))
    }


    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photoURL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="Enter Your photoURL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>

        <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    );
};

export default Register;