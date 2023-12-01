import React from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';



const ServiceTable = ({ data }) => {
  return (
    <Table responsive striped borderless  hover>
      <thead className='position-sticky'>
        <tr>
          <th>Services</th>
          <th>ID</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((service) => (
          <tr key={service._id}>
            <td>{service.PropertyName}</td>
            <td>{service._id}</td>
            <td>{service.date}</td>
            <td>{service.status}</td>
            <td>
              <span title="">
                <FaEdit className="edit-iconv text-success" />
              </span>
              <span title="">
                <FaTrash className="delete-icon text-danger" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ServiceTable;
