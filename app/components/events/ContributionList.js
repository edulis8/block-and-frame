import React from 'react';
import Contribution from './ContributionListItem';

const ContributionList = ({ contributions, onCheckBoxClick }) => (
  <ul>
    {contributions.map((contrib, index) =>
      <Contribution
        key={index}
        {...contrib}
        onCheckBoxClick={onCheckBoxClick}
      />
    )}
  </ul>
);

module.exports = ContributionList;
// Above, the ...spread operater is used instead of:
// bringer={contrib.bringer}
// item={contrib.item}
// notes={contrib.notes}
// index={contrib.index}

