import React from 'react';

const SubjectTable = () => {
  const data = [
    { subject: 'DSC+Project', hours: 63, credits: 52, papers: 12 },
    { subject: 'Practical', hours: 32, credits: 16, papers: 8 },
    { subject: 'DSE', hours: 16, credits: 16, papers: 4 },
    { subject: 'IDC', hours: 4, credits: 4, papers: 2 },
    { subject: 'SEC- SWAYAM-NPTEL', hours: 2, credits: 2, papers: 1 },
    { subject: 'Library Hour', hours: 3, credits: 0, papers:0  },
    { subject: 'Total', hours:120, credits: 90, papers:27  },


    // Add more data as needed
  ];

  return (
    <div className="container">
        <h2 className='py-3'>Course Strutucre</h2>
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: 'red', color: 'white' }} >
            <th className='bg-success text-light'>SUBJECT</th>
            <th className='bg-success text-light'>HOURS</th>
            <th className='bg-success text-light'>CREDITS</th>
            <th className='bg-success text-light'>NO. OF PAPERS</th>
          </tr>
        </thead>
        <tbody >
          {data.map((row, index) => (
            <tr key={index} className='fs-5 '>
              <td className='text-primary fw-bold'>{row.subject}</td>
              <td>{row.hours}</td>
              <td>{row.credits}</td>
              <td>{row.papers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;
