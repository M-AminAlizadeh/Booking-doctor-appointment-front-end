import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function DoctorDetails() {
  const style = {
    height: '75vh',
  };
  const { id } = useParams();
  const [specificDoctor, setSpecificDoctor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const APITOKEN = window.sessionStorage.getItem('APITOKEN');
      if (APITOKEN) {
        const response = await fetch(`https://booking-doctor-iqa1.onrender.com/v1/doctors/${id}`, {
          headers: {
            Authorization: `${APITOKEN}`,
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          setSpecificDoctor(responseData);
        } else {
          // const responseData = await response.json();
          // console.log(responseData);
          console.log('error while fetching reload the page');
        }
      } else {
        console.log('NO info available');
      }
    };
    fetchData();
  }, [id]);

  if (!specificDoctor) {
    return (<h1>Loading</h1>);
  }
  return (
    <div className="border w-75 min-vh-100 d-flex flex-column justify-content-between p-5">
      <div className="d-flex pe-3">
        <div className="flex-1 pr-5">
          <img src={specificDoctor.image_url} alt={specificDoctor.name} className="w-100 rounded" style={style} title={specificDoctor.name} />
        </div>
        <div className="flex-1 ps-5 w-100">
          <h1>Doctor Details</h1>
          <table className="table">
            <tbody>
              <tr className="table-secondary">
                <th className="text-capitalize">name</th>
                <td className="text-capitalize">{specificDoctor.name}</td>
              </tr>
              <tr>
                <th className="text-capitalize">specialization</th>
                <td className="text-capitalize">
                  {specificDoctor.specialization || 'Not Found'}
                </td>
              </tr>
              <tr className="table-secondary">
                <th className="text-capitalize">hospital</th>
                <td className="text-capitalize">
                  {specificDoctor.hospital || 'Not Found'}
                </td>
              </tr>
              <tr>
                <th className="text-capitalize">cost per consult</th>
                <td className="text-capitalize">
                  {specificDoctor.cost_per_consult || 'Not Found'}
                </td>
              </tr>
              <tr className="table-secondary">
                <th className="text-capitalize">description</th>
                <td className="text-capitalize">
                  {specificDoctor.description}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="d-flex justify-content-between my-3">
        <button type="button" className="carousel-btns py-2 px-4 rounded-start-pill border-0 turn-back-btn-bg">
          <Link to="/" title="Turn back">
            <img src="https://img.icons8.com/pastel-glyph/50/ffffff/circled-chevron-left.png" alt="circled-chevron-right" />
          </Link>
        </button>
        <Link to={`/doctors/${id}/add-reservation`} className="remove-underline-from-links">
          <button type="button" className="turn-back-btn-bg rounded border-0 p-3 text-white text-capitalize fw-bold">
            Add reservation
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DoctorDetails;
