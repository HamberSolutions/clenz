import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { PendingOrders, orderstatus } from '../../../features/admin/adminSlice';
import Spinner from '../../Common/Spinner/Spinner';

const Neworder = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message, pendingOrders } = useSelector((state) => state.admin); // Update state property

  const TableHeading = [
    { Id: '1', name: 'Serial #' },
    { Id: '2', name: 'Customer Name' },
    { Id: '3', name: 'Address' },
    { Id: '4', name: 'Contact #' },
    { Id: '5', name: 'Package Name' },
    { Id: '6', name: 'Price' },
    { Id: '7', name: 'Status' },
    { Id: '8', name: 'Processed' },
  ];

  useEffect(() => {
    // Fetch pending orders
    dispatch(PendingOrders());

    // Fetch order status
    // dispatch(orderstatus());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }


  if (!Array.isArray(pendingOrders) || pendingOrders.length === 0) {
    return (
      <div>
        <div>No pending orders available.</div>
        {message && <div>{message}</div>}
      </div>
    );
  }

  return (
    <>
      <div className="table_section">
        <div className="table_div">
          <Table responsive>
            <thead className="tb_header_bg">
              <tr>
                {TableHeading.map((data, index) => (
                  <th className="obs_table_header" key={index}>
                    {data.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map((order, index) => (
                <tr key={index}>
                  <td className="obs_table_content">{index + 1}</td>
                  <td className="obs_table_content">{order.username}</td>
                  <td className="obs_table_content">{order.user[0].address}</td>
                  <td className="obs_table_content">{order.user[0].phone}</td>
                  <td className="obs_table_content">{order.service.join(', ')}</td>
                  <td className="obs_table_content">{order.price}</td>
                  <td className="obs_table_content">{order.status}</td>
                  <td className="obs_table_content"><button>Done</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Neworder;
