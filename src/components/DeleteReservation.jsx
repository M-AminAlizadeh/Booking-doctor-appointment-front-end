import { useState, useEffect } from 'react';

function DeleteReservation() {
  const [reservations, setReservations] = useState(null);
  const [error, setError] = useState(null);
  const [deletedMsg, setDeletedMsg] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      if (APITOKEN) {
        const response = await fetch('https://booking-doctor-iqa1.onrender.com/v1/reservations', {
          headers: {
            Authorization: `${APITOKEN}`,
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          setReservations(responseData.data);
        } else {
          const responseData = await response.json();
          setError(responseData.error_message);
        }
      }
    };
    fetchReservations();
  }, []);

  const handleDeleteReservation = (e) => {
    const itemId = e.target.id;
    const responseDelete = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      const res = await fetch(`https://booking-doctor-iqa1.onrender.com/v1/reservations/${itemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${APITOKEN}`,
          id: itemId,
        },
      });
      if (res.ok) {
        setReservations(
          (prevReservations) => prevReservations.filter((reservation) => reservation.id !== itemId),
        );
        setDeletedMsg('Delete Reservation Successfully');
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
          {reservations ? reservations.map((reservation, index) => (
            <tr key={reservation.id}>
              <th scope="row">{index + 1}</th>
              <td>{reservation.date_of_appointment}</td>
              <td>{reservation.doctor.name}</td>
              <td>{reservation.doctor.specialization}</td>
              <td>{reservation.doctor.hospital}</td>
              <td>{reservation.doctor.cost_per_consult}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={handleDeleteReservation} id={reservation.id}>Remove</button>
              </td>
            </tr>
          )) : <tr>No reservation found</tr>}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteReservation;
