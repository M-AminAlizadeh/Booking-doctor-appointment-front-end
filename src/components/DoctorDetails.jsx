import { useParams, Link } from 'react-router-dom';

function DoctorDetails() {
  const style = {
    height: '75vh',
  };
  const { id } = useParams();
  const doctorsList = [
    {
      id: '1',
      image_url: 'https://images.unsplash.com/photo-1702011063069-11e96b6fa662?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name1',
      description: 'text1',
    },
    {
      id: '2',
      image_url: 'https://plus.unsplash.com/premium_photo-1701188698374-c5e24b3fbeab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name2',
      description: 'text2',
    },
    {
      id: '3',
      image_url: 'https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
      name: 'name3',
      description: 'text3',
    },
    {
      id: '4',
      image_url: 'https://images.unsplash.com/photo-1701959058086-e826f1bbee15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D',
      name: 'name4',
      description: 'text4',
    },
    {
      id: '5',
      image_url: 'https://images.unsplash.com/photo-1702140944199-5c321e5d5798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D',
      name: 'name5',
      description: 'text5',
    },
    {
      id: '6',
      image_url: 'https://images.unsplash.com/photo-1702205210523-37acf6c5eff3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name6',
      description: 'text6',
    },
    {
      id: '7',
      image_url: 'https://images.unsplash.com/photo-1701743805124-dde90e4df301?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name7',
      description: 'text7',
    },
    {
      id: '8',
      image_url: 'https://images.unsplash.com/photo-1701369290924-475bd6169621?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'name8',
      description: 'text8',
    },
  ];

  const specificDoctor = doctorsList.find((doctor) => doctor.id === id);

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
