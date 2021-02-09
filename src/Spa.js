import React from 'react';
import { useForm } from 'react-hook-form';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';

import { FaEdit, FaTrash } from 'react-icons/fa';
import './Spa.css';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-5">
          <Col>

            <Row>
              <Col xs sm={6}>
                <Form.Group as={Row} controlId="controlFirstname">
                  <Form.Label column sm="4">
                    First Name
                </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" name="firstname" ref={register} />
                  </Col>
                </Form.Group>
              </Col>
              <Col xs sm={6}>
                <Form.Group as={Row} controlId="controlLastname">
                  <Form.Label column sm="4">
                    Last Name
                </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" name="lastname" ref={register} />
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs sm={6}>
                <Form.Group as={Row} controlId="controlGen">
                  <Form.Label column sm="4">
                    Gen
                </Form.Label>
                  <Col sm="8">
                    <Form.Control as="select" name="gen" ref={register}>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col xs sm={6}>
                <Form.Group as={Row} controlId="controlAge">
                  <Form.Label column sm="4">
                    Age
                </Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" name="age" ref={register} />
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs sm={6}>
                <Form.Group as={Row} controlId="controlNationality">
                  <Form.Label column sm="4">
                    Nationality
                </Form.Label>
                  <Col sm="8">
                    <Form.Control as="select" name="nationality" ref={register}>
                      <option>Thai</option>
                      <option>Chinese</option>
                      <option>Russian</option>
                      <option>Italian</option>
                      <option>Austrian</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col xs sm={6}>
                <Form.Group as={Row} controlId="controlPhone" ref={register}>
                  <Form.Label column sm="4">
                    Phone
                </Form.Label>
                  <Col sm="8">
                    <Row>
                      <Col sm="4">
                        <Form.Control as="select" name="phone_code" ref={register}>
                          <option>+66</option>
                        </Form.Control>
                      </Col>
                      <Col sm="8">
                        <Form.Control type="text" name="phone" ref={register} />
                      </Col>
                    </Row>
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-md-center mt-2">
              <Col xs={8} sm={4} md={3}>
                <Button type="submit" className="btn-block" variant="success">SAVE</Button>
              </Col>
            </Row>

          </Col>
        </Row>
      </Form>

      <Row>
        <Col>
          <Table responsive="sm">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gen</th>
                <th>Age</th>
                <th>Nationality</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="center">
                  <>
                    <Form.Check aria-label="option 1" />
                  </>
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                  <FaEdit />
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
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