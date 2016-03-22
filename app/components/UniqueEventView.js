import React from 'react';

class UniqueEventView extends React.Component {
  render() {
    return (
      <div className="ui massive relaxed list">
        <img className="ui tiny circular right floated image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
        <div className="item">
            <div className="eventName">
              {this.props.eventName}
            </div>

            <div className="location">
              {this.props.location}
            </div>

            <div className="host">
              Hosted by {this.props.hostName}
            </div>

            <div className="description">
              {this.props.description}
            </div>

            {this.props.sameEmail ?
              <button
                className="editButton"
                onClick={this.props.setEdit}
              >
                Edit your spread!
              </button>
            :
              null
            }

          </div>
        </div>
    );
  }
}

export default UniqueEventView;
