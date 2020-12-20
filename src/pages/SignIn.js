import React, { Fragment, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components/';

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [ error, setError ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');

  const isValid = !emailAddress || !password

  const handleSignIn = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setEmailAddress('')
        setPassword('')
        setError('')
        history.push('/dashboard')
      })
      .catch(error => setError(error.message))
  }
  return (
    <Form>
      <Form.Base onSubmit={handleSignIn} method='POST'>
      <Form.Title>Sign in to jchain dashboard</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
        <Form.Input
          placeholder='Email Address'
          value={emailAddress}
          onChange={({ target }) => setEmailAddress((target.value))}
        />
        <Form.Input
          type='password'
          autoComplete='off'
          placeholder='Password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Form.Submit
          disabled={isValid}
          type='submit'>
          Sign In
        </Form.Submit>
        <Form.TextSmall>New to jchain? <Link to='/signup'>Create an account now.</Link></Form.TextSmall>
      </Form.Base>
    </Form>
  )
}
