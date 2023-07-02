import React from 'react'
import { Table } from "react-bootstrap"

const Neworder = () => {
    const TableHeading = [
        {
            Id: "1",
            name: "Serial #"
        },
        {
            Id: "2",
            name: "Customer Name"
        },
        {
            Id: "3",
            name: "Address"
        },
        {
            Id: "4",
            name: "Contact #"
        },
        {
            Id: "5",
            name: "Package Name"
        },
        {
            Id: "6",
            name: "Price"
        },
        {
            Id: "7",
            name: "Status"
        },
        {
            Id: "8",
            name: "Processed"
        },
    ]
    const TableData = [
        {
            Id: "1",
            name: "1"
        },
        {
            Id: "2",
            name: "Hafiz Abu Baker"
        },
        {
            Id: "3",
            name: "Johar Town Lahore"
        },
        {
            Id: "4",
            name: "03321718144"
        },
        {
            Id: "5",
            name: "Relaxation Massage - 60 minutes"
        },
        {
            Id: "6",
            name: "AED 249"
        },
        {
            Id: "7",
            name: "Pending"
        },
        {
            Id: "8",
            name: <button style={{borderRadius:"8px", padding:"0px 8px", background:"#101928", color:"aliceblue"}}>Done</button>
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

export default Neworder

