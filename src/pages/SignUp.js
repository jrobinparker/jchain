import React, { Fragment, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components/';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const isValid = !firstName || !lastName || !emailAddress || !password

  const handleSignUp = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result =>
        result.user
        .updateProfile({
          displayName: firstName
        })
      )
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
      <Form.Base onSubmit={handleSignUp} method='POST'>
        <Form.Title>Create a jchain account</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Input
          placeholder='First Name'
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <Form.Input
          placeholder='Last Name'
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
        <Form.Input
          placeholder='Email Address'
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <Form.Input
          type='password'
          placeholder='Password'
          autoComplete={false}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Form.Submit
          disabled={isValid}
          type='submit'
        >
          Create Account
        </Form.Submit>
        <Form.TextSmall>Already have an account? <Link to='/signin'>Click here to sign in.</Link></Form.TextSmall>
      </Form.Base>
    </Form>
  )
}
