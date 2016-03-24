import React from 'react';
import Contribution from './ContributionListItem';

const ContributionList = ({ contributions, onCheckBoxClick }) => (
  <div className="ui segment">
    <h3 className="ui header">
      Please bring for this spread:
    </h3>
    <div className="ui items">
      {contributions.map((contrib, index) =>
        <Contribution
          key={index}
          {...contrib}
          onCheckBoxClick={onCheckBoxClick}
        />
      )}
    </div>
  </div>
);

module.exports = ContributionList;
// Above, the ...spread operater is used instead of:
// bringer={contrib.bringer}
// item={contrib.item}
// notes={contrib.notes}
// index={contrib.index}

