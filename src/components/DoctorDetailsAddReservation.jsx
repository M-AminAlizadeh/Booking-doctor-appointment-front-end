import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function DoctorDetailsAddReservation() {
  const { id } = useParams();
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-75 min-vh-100">
      <h1 className="my-5">Appointment From doctor (Doctor.name)</h1>
      <form className="w-50 d-flex flex-column gap-4">
        {/* username(autofilled) */}
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Username (auto-filled)
            <input className="form-control" type="text" id="exampleFormControlInput1" value="" />
          </label>
        </div>

        {/* Date */}
        <div className="form-group">
          Date
          <br />
          <DatePicker onChange={onChange} value={value} className="w-25" id="choose-date" />
        </div>
        {/* For doctor and hospital use doctor id for autofill them */}
        {/* Doctor */}
        <div className="form-group" title="It will autofilled base on doctor's name">
          <label htmlFor="exampleFormControlInput2">
            Doctor name(auto-filled)
            <input className="form-control" type="text" id="exampleFormControlInput2" value={id} />
          </label>
        </div>

        {/* Location base on doctor */}
        <div className="form-group" title="It will autofilled base on doctor's name">
          <label htmlFor="exampleFormControlInput2">
            Hospital name(auto-filled)
            <input className="form-control" type="text" id="exampleFormControlInput2" value="" />
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-25">Submit</button>
      </form>
    </div>
  );
}
