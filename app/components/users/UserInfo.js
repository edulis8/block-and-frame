import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="six wide column">
      <div className="ui card">
        <div className="image">
          <img src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
        </div>
        <div className="content">
          <div className="header">
            {user.username || user.email}
          </div>
          <div className="meta">
            <i className="marker icon" />
            {user.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
