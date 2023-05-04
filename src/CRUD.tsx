import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CRUD = () => {
  const empData: any = [
    { id: 1, name: "a", age: 1, isActive: 0 },
    { id: 2, name: "b", age: 2, isActive: 1 },
  ];
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const empDetails = {
    name: "",
    age: "",
    isActive: 0,
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isActive, setIsActive] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setData(empData);
  }, []);

  const handleEdit = (id: any) => {
    console.log("handle edit--", id);
    handleShow();
  };

  const handleUpdate = () => {
    console.log("handling update for id--");
  };

  const handleDelete = (id: number) => {
    console.log("handling delete", id);
  };
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <input
              type="text"
              value={name}
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="number"
              value={age}
              className="form-control"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="checkbox"
              checked={isActive == 1 ? true : false}
              onChange={(e) => handleEdit(e)}
              value={isActive}
            />
            <label>Is Active {isActive}</label>
          </Col>
          <Col>
            <button className="btn btn-primary">Submit</button>
          </Col>
        </Row>

        <Table striped bordered hover className="mt-4">
          <thead>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>IsActive</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.isActive}</td>
                  <td colSpan={2}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Employee Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </Col>
              <Col>
                <input
                  type="number"
                  value={age}
                  className="form-control"
                  placeholder="Enter Age"
                  onChange={(e) => setAge(e.target.value)}
                ></input>
              </Col>
              <Col>
                <input
                  type="checkbox"
                  checked={isActive == 1 ? true : false}
                  onChange={(e) => handleEdit(e)}
                  value={isActive}
                />
                <label>Is Active</label>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleUpdate()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};
export default CRUD;
