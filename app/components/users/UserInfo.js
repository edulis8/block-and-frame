import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={user.instagramProfilePicUrl || 'http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png'} />
        </div>
        <div className="content">
          <div className="header">
            {user.username || user.email}
          </div>
          <div className="meta">
            <i className="marker icon" />
            {user.location}
          </div>
          <div className="meta">
            <i className="road icon" />
            {
              user.isTraveling ? 'Currently Traveling' : 'Not Traveling'
            }
          </div>
        </div>
      </div>
      <div className="ui card">
        <div className="content">
        {user.bio || `${(user.username || user.email)} hasnt filled out their bio`}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
