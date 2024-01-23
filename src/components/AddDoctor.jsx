import { useState } from 'react';

function AddDoctor() {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [hospital, setHospital] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [createdMsg, setCreatedMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const APITOKEN = window.sessionStorage.getItem('APITOKEN');
    if (APITOKEN) {
      const response = await fetch('https://booking-doctor-8x6t.onrender.com/v1/doctors', {
        method: 'POST',
        headers: {
          Authorization: `${APITOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          specialization,
          hospital,
          cost_per_consult: price,
          description,
          image_url: imageUrl,
        }),
      });
      if (response.ok) {
        setCreatedMsg('Created successfully');
      } else {
        setErrorMsg('Error happened please enter the inputs correctly');
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
      {errorMsg
        ? (
          <div className="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        )
        : null}
      <form className="w-50 d-flex flex-column gap-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Fullname
            <input
              className="form-control"
              type="text"
              id="exampleFormControlInput1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">
            Specialization
            <input
              className="form-control"
              type="text"
              id="exampleFormControlInput2"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput3">
            Hospital
            <input
              className="form-control"
              type="text"
              id="exampleFormControlInput3"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput4">
            Picture of doctor(url)
            <input
              className="form-control"
              type="text"
              id="exampleFormControlInput4"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput5">
            Cost per consult ($)
            <input
              className="form-control"
              type="number"
              id="exampleFormControlInput5"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-25">Submit</button>
      </form>
    </div>
  );
}

export default AddDoctor;
