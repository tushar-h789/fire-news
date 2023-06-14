import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)

    const handleLogin = (event)=>{
        event.preventDefault()
    }


  return (
    <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control defaultValue={user?.email} readOnly type="email" name='email' placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control defaultValue={user?.displayName} type="text" name='name' placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>photoURL</Form.Label>
          <Form.Control defaultValue={user?.photoURL} type="text" name='name' placeholder="PhotoURL" />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Login
        </Button>

        <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
  )
}

export default Profile