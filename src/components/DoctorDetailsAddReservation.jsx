import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';

export default function DoctorDetailsAddReservation() {
  const { id } = useParams();
  const [value, onChange] = useState(new Date());
  const [name, setName] = useState('');
  const [createdMsg, setCreatedMsg] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      if (APITOKEN) {
        const responseUserInfo = await fetch('https://booking-doctor-iqa1.onrender.com/v1/users/fetch_current_user', {
          headers: {
            Authorization: `${APITOKEN}`,
          },
        });
        if (responseUserInfo.ok) {
          const responseData = await responseUserInfo.json();
          setName(responseData.data.name);
        }
        const response = await fetch('https://booking-doctor-iqa1.onrender.com/v1/doctors', {
          headers: {
            Authorization: `${APITOKEN}`,
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          const { data } = responseData;
          const selectedDoc = data.find((doctor) => doctor.id === id);
          setSelectedDoctor(selectedDoc);
        }
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const APITOKEN = window.sessionStorage.getItem('APITOKEN');
    const year = value.getFullYear();
    const month = (value.getMonth() + 1).toString().padStart(2, '0');
    const day = value.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    if (APITOKEN) {
      const response = await fetch('https://booking-doctor-iqa1.onrender.com/v1/reservations', {
        method: 'POST',
        headers: {
          Authorization: `${APITOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date_of_appointment: formattedDate,
          doctor_id: id.toString(),
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setCreatedMsg(responseData.message);
      }
    }
  };

  return (
    <div className="w-75 min-vh-100">
      <h1 className="my-5">
        Appointment From
        {selectedDoctor ? ` ${selectedDoctor.name}` : ''}
      </h1>
      {createdMsg ? (
        <div className="alert alert-success" role="alert">
          {createdMsg}
        </div>
      ) : null}
      <form className="w-50 d-flex flex-column gap-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Username (auto-filled)
            <input className="form-control" type="text" id="exampleFormControlInput1" value={name} readOnly />
          </label>
        </div>
        <div className="form-group">
          Date
          <br />
          <DatePicker onChange={onChange} value={value} className="w-25" id="choose-date" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">
            Doctor Name (auto-filled)
            <input
              className="form-control"
              type="text"
              id="exampleFormControlInput2"
              value={selectedDoctor ? selectedDoctor.name : ''}
              readOnly
            />
          </label>
        </div>
        <div className="form-group" title="It will autofilled base on doctor's name">
          <label htmlFor="exampleFormControlInput3">
            Hospital Name (auto-filled)
            <input
              className="form-control"
              type="text"
              id="exampleFormControlInput3"
              value={selectedDoctor ? selectedDoctor.hospital : ''}
              readOnly
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-25">
          Submit
        </button>
      </form>
    </div>
  );
}
