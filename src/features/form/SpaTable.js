import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';

import { useSelector, useDispatch } from 'react-redux'
import { spaList, deleteFromList } from './spaFormSlice';
import { toEdit } from './spaSlice';

import { useForm } from 'react-hook-form'

import { Row, Col, Form, Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash, FaSortAlphaUp, FaSortAlphaDown } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

import './SpaTable.css';

export function SpaTable() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    dispatch(deleteFromList(data.ids));
  };

  const SPAs = useSelector(spaList);
  const [finalSPAs, setFinalSPAs] = useState({});
  useEffect(() => {
    setFinalSPAs(SPAs);
  }, [SPAs]);

  // CHECKBOX
  const [checkAll, setCheckAll] = useState(false);
  const [checkValue, setCheckValue] = useState({});

  const [pages, setPages] = useState({
    currentPage: 1,
    perPage: 5,
    offset: 0
  });
  const [sorting, setSorting] = useState({
    field: "",
    by: undefined
  });

  useEffect(() => {
    if (checkValue) {
      let checkValueFiltered = Object.values(checkValue).filter(checkValue => checkValue && checkValue == true);
      setCheckAll(checkValueFiltered.length == finalSPAs.length);
    }
  }, [checkValue]);

  useEffect(() => {
    if (SPAs && SPAs.length > 0) {
      let sortedCollection = SPAs;
      if (sorting.field) {
        let _sorting = [sorting.field];
        if (sorting.field == "firstname") {
          _sorting = [sorting.field, "lastname"]
        }
        sortedCollection = orderBy(sortedCollection, _sorting, [sorting.by])
      }

      if (pages.offset >= 0 && pages.perPage) {
        sortedCollection = sortedCollection.slice(pages.offset, pages.offset + pages.perPage);
      }
      setFinalSPAs(sortedCollection);
    }
  }, [SPAs, sorting, pages]);

  const handleSorting = (field) => {
    let by = "asc";
    if (field == sorting.field) {
      if (sorting.by === "asc") {
        by = "desc";
      } else if (sorting.by === "desc") {
        by = "asc";
      }
    }
    setSorting({ field: field, by: by });
  }

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * pages.perPage);
    setPages({
      ...pages,
      currentPage: selected,
      offset: offset
    })
  }

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
                <th onClick={() => handleSorting("firstname")} style={{ cursor: "pointer" }}>
                  Name {sorting.field == "firstname" && (sorting.by == "desc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />)}
                </th>
                <th onClick={() => handleSorting("gen")} style={{ cursor: "pointer" }}>
                  Gen {sorting.field == "gen" && (sorting.by == "desc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />)}
                </th>
                <th onClick={() => handleSorting("age")} style={{ cursor: "pointer" }}>
                  Age {sorting.field == "age" && (sorting.by == "desc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />)}
                </th>
                <th onClick={() => handleSorting("nationality")} style={{ cursor: "pointer" }}>
                  Nationality {sorting.field == "nationality" && (sorting.by == "desc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />)}
                </th>
                <th onClick={() => handleSorting("phone")} style={{ cursor: "pointer" }}>
                  Phone {sorting.field == "phone" && (sorting.by == "desc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />)}
                </th>
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
                          <FaEdit onClick={() => dispatch(toEdit(SPA))} />
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

      {
        SPAs && SPAs.length > 0 &&
        <Row>
          <Col>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={Math.ceil(SPAs.length / pages.perPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={pages.perPage}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </Col>
        </Row>
      }
    </Form>
  )
}