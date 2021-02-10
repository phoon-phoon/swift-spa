import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { SpaForm } from './features/form/SpaForm';
import { SpaTable } from './features/form/SpaTable';

import './Spa.css';

export default function App() {
  return (
    <Container className="my-5">
      <SpaForm />
      <SpaTable />
    </Container>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input name="firstName" ref={register} />
    //   <select name="gender" ref={register}>
    //     <option value="female">female</option>
    //     <option value="male">male</option>
    //     <option value="other">other</option>
    //   </select>
    //   <input type="submit" />
    // </form>
  );
}