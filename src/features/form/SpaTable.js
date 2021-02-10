import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {
  spaList,
  addToList,
  deleteFromList
} from './spaFormSlice';

import { useForm } from 'react-hook-form'

import { Row, Col, Form, Table, Button, Pagination } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

import './SpaTable.module.css';

export function SpaTable() {
  const dispatch = useDispatch();

  const SPAs = useSelector(spaList);
  const [finalSPAs, setFinalSPAs] = useState({});
  useEffect(() => {
    console.log("SPAs", SPAs);
    let newSPAs = [];
    for (var i in SPAs) {
      newSPAs.push(SPAs[i]);
    }
    setFinalSPAs(newSPAs);
  }, [SPAs]);

  useEffect(() => {
    console.log("finalSPAs", finalSPAs);
  }, [finalSPAs]);

  const [checkAll, setCheckAll] = useState(false);
  const [checkValue, setCheckValue] = useState({});
  useEffect(() => {
    console.log("checkValue", finalSPAs);
    if (checkValue) {
      let checkValueFiltered = Object.values(checkValue).filter(checkValue => checkValue && checkValue == true);
      setCheckAll(checkValueFiltered.length == finalSPAs.length);
    }
  }, [checkValue]);

  const [sorting, setSorting] = useState({
    field: "",
    by: "ASC",
  });

  const [pages, setPages] = useState({
    currentPage: 1,
    perPage: 10
  });

  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    dispatch(deleteFromList(data.ids));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Col>
          <Form.Check
            inline
            type="checkbox"
            id="default-checkbox"
            label="Select All"
            // onClick={() => { setCheckAll(!checkAll) }}
            checked={checkAll}
            onChange={() => { setCheckAll(!checkAll) }}
          />
          <Button type="submit" variant="danger">Delete Selected</Button>
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
              finalSPAs && finalSPAs.length > 0 ?
                <tbody>
                  {
                    finalSPAs.map((SPA) =>
                      <tr key={SPA.id}>
                        <td className="center">
                          <>
                            <Form.Check aria-label={SPA.id} value={SPA.id} name="ids" ref={register} checked={checkAll || checkValue[SPA.id] || false}
                              onChange={() => { let _checkValue = checkValue; _checkValue = { ..._checkValue, [SPA.id]: !checkValue[SPA.id] }; setCheckValue(_checkValue); }}
                            />
                          </>
                        </td>
                        <td>{SPA.firstname} {SPA.lastname}</td>
                        <td>{SPA.gen}</td>
                        <td>{SPA.age}</td>
                        <td>{SPA.nationality}</td>
                        <td>{SPA.phone_code} {SPA.phone}</td>
                        <td>
                          {/* <FaEdit /> */}
                          <FaTrash onClick={() => dispatch(deleteFromList([SPA.id]))} />
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

      {/* <Row>
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
      </Row> */}
    </Form>
  )
}