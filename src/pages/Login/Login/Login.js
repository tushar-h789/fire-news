import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');

    const {signIn, setLoader} = useContext(AuthContext)

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
            
            if(user.emailVerified){
                navigate(from, {replace: true})
            }else{
                toast.error('First verify your email then login.')
            }
        })
        .catch(error => {
            console.error(error)
            setError('');
            setError(error.message)
        })
        .finally(()=>{
            setLoader(false)
        })
    }

    return (
        <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Login
        </Button>

        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Login;