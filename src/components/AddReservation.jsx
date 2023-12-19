import { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function AddReservation() {
  const [value, onChange] = useState(new Date());
  const [name, setName] = useState('');
  const [doctorsList, setDoctorsList] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [selectedDoctorName, setSelectedDoctorName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [createdMsg, setCreatedMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      if (APITOKEN) {
        // Name
        const responseUserInfo = await fetch('https://booking-doctor-iqa1.onrender.com/v1/users/fetch_current_user', {
          headers: {
            Authorization: `${APITOKEN}`,
          },
        });
        if (responseUserInfo.ok) {
          const responseData = await responseUserInfo.json();
          setName(responseData.data.name);
        }
        // doctors info
        const response = await fetch('https://booking-doctor-iqa1.onrender.com/v1/doctors', {
          headers: {
            Authorization: `${APITOKEN}`,
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          const { data } = responseData;
          setDoctorsList(data);
        }
      }
    };
    fetchData();
  }, []);

  const handleDoctorChange = (e) => {
    const selectedDoctorValue = e.target.value;
    setSelectedDoctorName(selectedDoctorValue);
    setHospitalName((prevHospitalName) => {
      const filteredDoctorsList = doctorsList.filter(
        (doctor) => doctor.name === selectedDoctorValue,
      );

      if (filteredDoctorsList.length === 1) {
        setSelectedDoctorId(filteredDoctorsList[0].id);
      }

      return filteredDoctorsList.length > 0 ? filteredDoctorsList[0].hospital : prevHospitalName;
    });
  };

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
          // doctor: [selectedDoctorName],
          doctor_id: selectedDoctorId.toString(),
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setCreatedMsg(responseData.message);
        console.log(responseData.message);
      }
    }
  };

  return (
    <div className="w-75 min-vh-100">
      <h1 className="my-5">Add a new Reservation Form</h1>
      {createdMsg
        ? (
          <div className="alert alert-success" role="alert">
            {createdMsg}
          </div>
        )
        : null}
      <form className="w-50 d-flex flex-column gap-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Username (auto-filled)
            <input className="form-control" type="text" id="exampleFormControlInput1" value={name} />
          </label>
        </div>
        <div className="form-group">
          Date
          <br />
          <DatePicker onChange={onChange} value={value} className="w-25" id="choose-date" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            Doctors List
            <select
              className="form-control w-100"
              id="exampleFormControlSelect1"
              onChange={handleDoctorChange}
              value={selectedDoctorName}
              required
            >
              <option value="" disabled defaultValue>Select your doctor</option>
              {doctorsList
                ? doctorsList.map(
                  (doctor) => (<option key={doctor.id} value={doctor.name}>{doctor.name}</option>),
                )
                : <option value="" disabled defaultValue>No doctor available</option>}
              ;
            </select>
          </label>
        </div>
        <div className="form-group" title="It will autofilled base on doctor's name">
          <label htmlFor="exampleFormControlInput2">
            Hospital name(auto-filled)
            <input
              className="form-control"
              type="text"
              id="exampleFormControlInput2"
              value={hospitalName}
              readOnly
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-25">Submit</button>
      </form>
    </div>
  );
}

export default AddReservation;
