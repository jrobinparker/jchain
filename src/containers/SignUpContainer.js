import React from 'react';
import { Form } from '../components';

export default function SignUpContainer() {
  return (
    <Form>
      <Form.Base>
        <Form.Title>Create a jchain account</Form.Title>
        <Form.Input placeholder="first name" />
        <Form.Input placeholder="last name" />
        <Form.Input placeholder="email address" />
        <Form.Input type="password" placeholder="password" />
        <Form.Submit type="submit">Create Account</Form.Submit>
        <Form.TextSmall>Already have an account? Click here to sign in.</Form.TextSmall>
      </Form.Base>
    </Form>
  )
}
