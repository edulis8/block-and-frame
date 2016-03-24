import React from 'react';
import Contribution from './ContributionListItem';

const ContributionList = ({ contributions, onCheckBoxClick }) => (
  <div>
    <div className="ui attached info message">
      {/* TODO: add close message behavior */}
      <i className="close icon"></i>
      <div className="header small">
        Let everyone know what you're bringing!
      </div>
      <p>Just check the box under a contribution.</p>
    </div>
    <div className="ui segment">
      <div className="ui header medium">Bring Something</div>
      <div className="ui divider"></div>
      <div className="ui cards">
        {contributions.map((contrib, index) =>
          <Contribution
            key={index}
            {...contrib}
            _onCheckBoxClick={onCheckBoxClick}
          />
        )}
      </div>
    </div>
  </div>
);

module.exports = ContributionList;
// Above, the ...spread operater is used instead of:
// bringer={contrib.bringer}
// item={contrib.item}
// notes={contrib.notes}
// index={contrib.index}

