import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {
  spaList,
  addToList,
  deleteFromList
} from './spaFormSlice';

import { loadState, saveState } from './SpaLocalStorage';

import { Row, Col, Form, Table, Button, Pagination } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

import './SpaTable.module.css';

export function SpaTable() {
  const SPAs = useSelector(spaList);
  saveState(SPAs);
  console.log("Init", SPAs);

  return (
    <>
      <Row className="mb-3">
        <Col>
          <Form.Check
            inline
            type="checkbox"
            id="default-checkbox"
            label="Select All"
          />
          <Button variant="danger">Delete Selected</Button>
        </Col>
      </Row>
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

            {
              SPAs && SPAs.length > 0 ?
                <tbody>
                  {
                    SPAs.map((SPA, iSPA) =>
                      <tr key={iSPA}>
                        <td className="center">
                          <>
                            <Form.Check aria-label="option 1" />
                          </>
                        </td>
                        <td>{SPA.firstname} {SPA.lastname}</td>
                        <td>{SPA.gen}</td>
                        <td>{SPA.age}</td>
                        <td>{SPA.nationality}</td>
                        <td>{SPA.phone_code} {SPA.phone}</td>
                        <td>
                          <FaEdit />
                          <FaTrash />
                        </td>
                      </tr>
                    )
                  }
                </tbody>
                : <tbody><tr><td className="text-center text-danger" colSpan="7">No SPA.</td></tr></tbody>
            }
          </Table>
        </Col>
      </Row>

      <Row>
        <Col>
          <Pagination style={{ justifyContent: "center" }}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </>
  )
}