import React, { useState } from 'react';
import DoctorCard from './DoctorCard';

export default function DoctorsList() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const doctorsList = [
    {
      id: 1,
      image_url: 'https://images.unsplash.com/photo-1702011063069-11e96b6fa662?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name1',
      description: 'text1',
    },
    {
      id: 2,
      image_url: 'https://plus.unsplash.com/premium_photo-1701188698374-c5e24b3fbeab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name2',
      description: 'text2',
    },
    {
      id: 3,
      image_url: 'https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
      name: 'name3',
      description: 'text3',
    },
    {
      id: 4,
      image_url: 'https://images.unsplash.com/photo-1701959058086-e826f1bbee15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D',
      name: 'name4',
      description: 'text4',
    },
    {
      id: 5,
      image_url: 'https://images.unsplash.com/photo-1702140944199-5c321e5d5798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D',
      name: 'name5',
      description: 'text5',
    },
    {
      id: 6,
      image_url: 'https://images.unsplash.com/photo-1702205210523-37acf6c5eff3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name6',
      description: 'text6',
    },
    {
      id: 7,
      image_url: 'https://images.unsplash.com/photo-1701743805124-dde90e4df301?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name7',
      description: 'text7',
    },
    {
      id: 8,
      image_url: 'https://images.unsplash.com/photo-1701369290924-475bd6169621?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name8',
      description: 'text8',
    },
  ];

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
          ? <DoctorCard doctor={doctor} key={Math.floor(Math.random() * 1000)} />
          : ''))}
        <button type="button" className="carousel-btns py-2 px-4 rounded-start-pill border-0" onClick={handleNextBtn}>
          <img src="https://img.icons8.com/pastel-glyph/50/000000/circled-chevron-right.png" alt="circled-chevron-right" />
        </button>
      </div>
    </div>
  );
}
