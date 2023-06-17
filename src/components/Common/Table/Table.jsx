import React from "react";

const Table = () => {
  const arraydata = [
    {
        id:1,
        heading:'Time Remaining',
      
    },
    {
        id:2,
        heading:'Approvals',
       

    },
    {
        id:3,
        heading:'Denies',
  

    },
    {
        id:4,
        heading:'Approval %',
       

    },
    {
        id:5,
        heading:'Participation',

    },
    {
        id:6,
        heading:'Chain',

    },
    {
        id:7,
        heading:'Market',

    },
    {
        id:8,
        heading:'Author',

    },
]

const arraydatacellone = [
    {
        id:1,
        cellone:'09:08:00',
    },
    {
        id:2,
        cellone:'758',
        

    },
    {
        id:3,
        cellone:'12',

    },
    {
        id:4,
        cellone:'80%',

    },
    {
        id:5,
        
        cellone:'35%',
    },
    {
        id:6,
        cellone:'ETH',

    },
    {
        id:7,
        cellone:'Token',

    },
    {
        id:8,
        cellone:'0xfee5',

    },
]
const arraydatacelltwo = [
    {
        id:1,
        celltwo:'03:16:00',
    },
    {
        id:2,
        celltwo:'4673',
        

    },
    {
        id:3,
        celltwo:'56',

    },
    {
        id:4,
        celltwo:'46%',

    },
    {
        id:5,
        
        celltwo:'67%',
    },
    {
        id:6,
        celltwo:'SOL',

    },
    {
        id:7,
        celltwo:'NFT',

    },
    {
        id:8,
        celltwo:'0xfee5',

    },
]
const arraydatacellthree = [
    {
        id:1,
        cellthree:'05:15:00',
    },
    {
        id:2,
        cellthree:'72',
        

    },
    {
        id:3,
        cellthree:'37',

    },
    {
        id:4,
        cellthree:'84%',

    },
    {
        id:5,
        
        cellthree:'34%',
    },
    {
        id:6,
        cellthree:'ETH',

    },
    {
        id:7,
        cellthree:'NFT',

    },
    {
        id:8,
        cellthree:'0xfee5',

    },
]
  return (
    <>
      <div className="table_section">
      <div className="table_div">
        <Table responsive   >
        <thead className="th_bg_color">
          <tr>
            <th  className="left_border"># Proposal</th>
            {arraydata.map((data, index) => (
              <th>{data.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {arraydatacellone.map((data, index) => (
              <td>{data.cellone}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {arraydatacelltwo.map((data, index) => (
              <td>{data.celltwo}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {arraydatacellthree.map((data, index) => (
              <td>{data.cellthree}</td>
            ))}
          </tr>
        </tbody>
      </Table>
        </div>
      </div>
    </>
  );
};

export default Table;
