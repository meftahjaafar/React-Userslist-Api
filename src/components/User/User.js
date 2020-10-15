import React from "react";


const User = ({ id, name, email }) => (
  <div className="col-12 col-lg-4 p-2 border">
    <p>{name}</p>
    <p>{email}</p>
    <p>
      <a href={`/user/${id}`} className="btn btn-sm btn-primary">Show User</a>
    </p>
  </div>
);

export default User;
