import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getFromList,
  addToList,
  deleteFromList
} from './spaFormSlice';

import { useForm } from 'react-hook-form'
import { Row, Col, Form, Button } from 'react-bootstrap'

import './SpaForm.module.css'

export function SpaForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    if (data.firstname && data.lastname && 
      data.gen && data.age && 
      data.nationality && data.phone_code && data.phone
    ) {
      dispatch(addToList(data));
    }
  };

  return (
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
              <Form.Group as={Row} controlId="controlPhone">
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
  )
}