import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { completedorders } from '../../../features/admin/adminSlice';
import Spinner from '../../Common/Spinner/Spinner';

const Oldorders = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, isError, message, completedOrders } = useSelector((state) => state.admin.completedOrders); // Update state property

  const TableHeading = [
    { Id: '1', name: '#' },
    { Id: '2', name: 'Name' },
    { Id: '3', name: 'Address' },
    { Id: '4', name: 'Contact #' },
    { Id: '5', name: 'Package Name' },
    { Id: '6', name: 'Price' },
    { Id: '7', name: 'Status' },
  ];

  

  useEffect(() => {

 const neworders =  dispatch(completedorders());
 neworders.then(response =>  setData(response?.payload?.slots) ).catch(e => {console.log(e)})
    
  }, [dispatch]);
console.log("data", data)



  if (isLoading) {
    return <Spinner />;
  }
  console.log(completedOrders);
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
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Oldorders



