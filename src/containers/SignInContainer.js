import React from 'react';
import { Form } from '../components';

export default function SignInContainer() {
  return (
    <Form>
      <Form.Base>
        <Form.Title>Sign in to jchain</Form.Title>
        <Form.Input placeholder="email address" />
        <Form.Input type="password" placeholder="password" />
        <Form.Submit type="submit">Sign In</Form.Submit>
        <Form.TextSmall>New to jchain? Create an account now.</Form.TextSmall>
      </Form.Base>
    </Form>
  )
}
