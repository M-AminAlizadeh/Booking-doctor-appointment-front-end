import { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
export default function DoctorsList() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [doctorsList, setDoctorsList] = useState([]);
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
          const data = await response.json();
          setDoctorsList(data);
        } else {
          console.log('error');
        }
      } else {
        console.log('no doctors');
      }
    };
    fetchData();
  }, []);
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
        {doctorsList.map((doctor, index) => (index >= currentSlide && index <= (currentSlide + 2)
          ? <DoctorCard doctor={doctor} key={doctor.id} />
          : ''))}
        <button type="button" className="carousel-btns py-2 px-4 rounded-start-pill border-0" onClick={handleNextBtn}>
          <img src="https://img.icons8.com/pastel-glyph/50/000000/circled-chevron-right.png" alt="circled-chevron-right" />
        </button>
      </div>
    </div>
  );
}