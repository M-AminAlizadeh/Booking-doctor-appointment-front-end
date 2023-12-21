import { useState, useEffect } from 'react';

function DeleteDoctor() {
  const [doctors, setDoctors] = useState(null);
  const [error, setError] = useState(null);
  const [deletedMsg, setDeletedMsg] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      if (APITOKEN) {
        const response = await fetch('http://127.0.0.1:3000/v1/doctors', {
          headers: {
            Authorization: APITOKEN,
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          setDoctors(responseData.data);
        } else {
          const responseData = await response.json();
          setError(responseData.error_message);
        }
      }
    };
    fetchDoctors();
  }, []);

  const handleDeleteDoctor = (e) => {
    const itemId = e.target.id;
    const responseDelete = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      const res = await fetch(`http://127.0.0.1:3000/v1/doctors/${itemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${APITOKEN}`,
          id: itemId,
        },
      });
      if (res.ok) {
        setDoctors(
          (previousDoctors) => previousDoctors.filter((doctor) => doctor.id !== itemId),
        );
        setDeletedMsg('Delete Doctor Successfully');
      }
    };
    responseDelete();
  };

  if (error) {
    return (<h1>{error}</h1>);
  }
  return (
    <div className="w-75 min-vh-100">
      <h1 className="my-5">Delete Reservation</h1>
      {deletedMsg
        ? (
          <div className="alert alert-success" role="alert">
            {deletedMsg}
          </div>
        )
        : null}
      <table className="table w-75 my-5">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">Date (Year/Month/Day)</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Doctor Specialization</th>
            <th scope="col">Hospital Name</th>
            <th scope="col" title="Per session">Costs($)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors ? doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <th scope="row">{index + 1}</th>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.hospital}</td>
              <td>{doctor.cost_per_consult}</td>
              <td>{doctor.description}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={handleDeleteDoctor} id={doctor.id}>Remove</button>
              </td>
            </tr>
          )) : <tr>No reservation found</tr>}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteDoctor;
