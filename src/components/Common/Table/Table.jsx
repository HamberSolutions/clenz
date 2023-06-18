import React from "react";
import { Table } from "react-bootstrap"

const OrdersTable = () => {
    const TableHeading = [
        {
            Id: "1",
            name: "Wallet"
        },
        {
            Id: "2",
            name: "Proposal’s Created"
        },
        {
            Id: "3",
            name: "Proposal’s Passed"
        },
        {
            Id: "4",
            name: "Votes Cast"
        },
        {
            Id: "5",
            name: "Total Author Bonus"
        },
        {
            Id: "6",
            name: "Wallet"
        },
    ]
    const TableData = [
        {
            Id: "1",
            name: "G7olP8"
        },
        {
            Id: "2",
            name: "14"
        },
        {
            Id: "3",
            name: "Proposal’s Passed"
        },
        {
            Id: "4",
            name: "08"
        },
        {
            Id: "5",
            name: "58"
        },
        {
            Id: "6",
            name: "$256.00"
        },
    ]
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


                            <tr>

                                {TableData.map((data, index) => (
                                    <td className='obs_table_content' key={index}>{data.name}</td>
                                ))}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default OrdersTable;
