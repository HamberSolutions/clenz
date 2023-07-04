import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { PendingOrders, orderstatus } from '../../../features/admin/adminSlice';
import Spinner from '../../Common/Spinner/Spinner';

const Neworder = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, isError, message, pendingOrders } = useSelector((state) => state.admin.pendingOrders); // Update state property

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
 const neworders =  dispatch(PendingOrders());
 neworders.then(response =>  setData(response?.payload?.slots) ).catch(e => {console.log(e)})
    // Fetch order status
    // dispatch(orderstatus());
  }, [dispatch]);
console.log("data", data)

const handlestatus = (_id) => {
  console.log("order id",_id);
  dispatch(orderstatus(_id));
  };


  if (isLoading) {
    return <Spinner />;
  }
  console.log(pendingOrders);
  return (
    <>
      <div className="table_section">
        <div className="table_div">
          <Table responsive>
            <thead className="tb_header_bg">
              <tr>
                {TableHeading.map((data) => (
                  <th className="obs_table_header" key={data.Id}>
                    {data.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((order, index) => (
                  <tr key={order._id}>
                    <td className="obs_table_content">{index + 1}</td>
                    <td className="obs_table_content">{order.user.username}</td>
                    <td className="obs_table_content">{order.user.address}</td>
                    <td className="obs_table_content">{order.user.phone}</td>
                    <td className="obs_table_content">{order.service.join(', ')}</td>
                    <td className="obs_table_content">{order.price}</td>
                    <td className="obs_table_content">{order.status}</td>
                    <td className="obs_table_content">
                      <button onClick={() => handlestatus(order._id)}>Done</button>
                    </td>
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
