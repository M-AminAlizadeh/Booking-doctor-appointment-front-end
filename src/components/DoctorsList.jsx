import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setDoctors from '../actions/doctorActions';
import DoctorCard from './DoctorCard';

// Use connect to connect the component to the Redux store
function DoctorsList({ doctorsList, setDoctors }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Remove the local state for doctorsList, as it is now managed by Redux
  useEffect(() => {
    const fetchData = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      if (APITOKEN) {
        const response = await fetch('https://booking-doctor-iqa1.onrender.com/v1/doctors', {
          headers: {
            Authorization: `${APITOKEN}`,
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          const { data } = responseData;
          setDoctors(data);
        }
      }
    };
    fetchData();
  }, [setDoctors]);

  const handleNextBtn = () => {
    if (currentSlide + 3 === doctorsList.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePreviousBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(doctorsList.length - 3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
      <h1 className="fw-bold text-uppercase">Doctors List</h1>
      <p className="text-secondary">Please select a doctor</p>
      {/* carousel */}
      <div className="d-flex align-items-center gap-4 w-75">
        <button type="button" className="carousel-btns py-2 px-4 rounded-end-circle border-0" onClick={handlePreviousBtn}>
          <img src="https://img.icons8.com/pastel-glyph/50/000000/circled-chevron-left.png" alt="circled-chevron-left" />
        </button>
        {doctorsList.map((doctor, index) => (index >= currentSlide && index <= currentSlide + 2 ? <DoctorCard doctor={doctor} key={doctor.id} /> : ''))}
        <button type="button" className="carousel-btns py-2 px-4 rounded-start-pill border-0" onClick={handleNextBtn}>
          <img src="https://img.icons8.com/pastel-glyph/50/000000/circled-chevron-right.png" alt="circled-chevron-right" />
        </button>
      </div>
    </div>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  doctorsList: state.doctor.doctorsList,
});

// Map Redux actions to component props
const mapDispatchToProps = {
  setDoctors,
};

DoctorsList.propTypes = {
  doctorsList: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the shape of each item in the array
      id: PropTypes.number.isRequired,
      // ... other properties ...
    }),
  ).isRequired,
  setDoctors: PropTypes.func.isRequired,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(DoctorsList);
