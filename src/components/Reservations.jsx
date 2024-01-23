import { useState, useEffect } from 'react';

function Reservations() {
  const [reservations, setReservations] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      if (APITOKEN) {
        const response = await fetch('https://booking-doctor-8x6t.onrender.com/v1/reservations', {
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

  if (error) {
    return (<h1>{error}</h1>);
  }
  return (
    <div className="w-75 min-vh-100">
      <h1 className="my-5">Reservations List</h1>
      <table className="table w-75 my-5">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">Date (Year/Month/Day)</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Doctor Specialization</th>
            <th scope="col">Hospital Name</th>
            <th scope="col" title="Per session">Costs($)</th>
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
            </tr>
          )) : <tr>No reservation found</tr>}
        </tbody>
      </table>
    </div>
  );
}

export default Reservations;
