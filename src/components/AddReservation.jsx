import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function AddReservation() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-75 min-vh-100">
      <h1 className="my-5">Add a new Reservation Form</h1>
      <form className="w-25 d-flex border flex-column gap-4">
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
          <DatePicker onChange={onChange} value={value} className="w-50" id="choose-date" />
        </div>

        {/* Doctor */}
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            Doctors List
            <select className="form-control w-100" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
            </select>
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

export default AddReservation;
