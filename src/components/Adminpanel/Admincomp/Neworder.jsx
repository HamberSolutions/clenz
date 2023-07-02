import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { pendingorders, orderstatus } from '../../../features/admin/adminSlice';
import Spinner from '../../Common/Spinner/Spinner';

const Neworder = () => {
    const dispatch = useDispatch();
    const { isLoading, isError, message } = useSelector((state) => state.admin);

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
        dispatch(pendingorders(orderData));

        // Fetch order status
        dispatch(orderstatus(statusData));
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="table_section">
                <div className="table_div">
                    <Table responsive >

                        <thead className='tb_header_bg'>
                            <tr>

                                {TableHeading.map((data, index) => (
                                    <th className='obs_table_headder' key={index}>{data.name}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {/* Map over the pending orders */}
                            {pendingorders.map((order) => (
                                <tr key={order.Id}>
                                    <td className="obs_table_content">{order.Id}</td>
                                    <td className="obs_table_content">{order.name}</td>
                                    <td className="obs_table_content">{order.address}</td>
                                    <td className="obs_table_content">{order.phone}</td>
                                    <td className="obs_table_content">{order.name}</td>
                                    <td className="obs_table_content">{order.name}</td>
                                    <td className="obs_table_content">{order.name}</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default Neworder

