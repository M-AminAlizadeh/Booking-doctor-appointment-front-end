function DeleteReservation() {
  return (
    <div className="w-75 min-vh-100">
      <h1 className="my-5">Delete Reservation</h1>
      <table className="table w-75 my-5">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">Date (Year/Month/Day)</th>
            <th scope="col">Hospital Name</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Doctor Specialization</th>
            <th scope="col" title="Per session">Costs($)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2023/12/12</td>
            <td>Milad</td>
            <td>John Doe</td>
            <td>Cardiology</td>
            <td>20</td>
            <td>
              <button type="button" className="btn btn-danger">Remove</button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>2023/12/12</td>
            <td>Milad</td>
            <td>John Doe</td>
            <td>Cardiology</td>
            <td>20</td>
            <td>
              <button type="button" className="btn btn-danger">Remove</button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>2023/12/12</td>
            <td>Milad</td>
            <td>John Doe</td>
            <td>Cardiology</td>
            <td>20</td>
            <td>
              <button type="button" className="btn btn-danger">Remove</button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>2023/12/12</td>
            <td>Milad</td>
            <td>John Doe</td>
            <td>Cardiology</td>
            <td>20</td>
            <td>
              <button type="button" className="btn btn-danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeleteReservation;
