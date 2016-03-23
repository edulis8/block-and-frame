import React from 'react';
import { Link } from 'react-router';

const EditSuccess = ({ success }) => {
  if (success) {
    return (
      <div className="ui success message">
        <div className="ui header">
          Save Successful!
        </div>
        <Link className="small" to={'/profile'} >
          Visit profile.
        </Link>
      </div>
    );
  }
  return (<div></div>);
};

export default EditSuccess;
