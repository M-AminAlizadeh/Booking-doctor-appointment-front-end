import { useParams } from 'react-router-dom';

function DoctorDetails() {
  const { id } = useParams();
  return (
    <div>
      Doctor
      {id}
    </div>
  );
}

export default DoctorDetails;
