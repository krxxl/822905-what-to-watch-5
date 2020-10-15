import React from 'react';
import TabOverview from './tab-overview';
import TabDetail from './tab-detail';
import TabReviews from './tab-reviews';

const getComponentByName = (type, film, filmReviews) => {
  switch (type) {
    case 'Overview':
      return <TabOverview film={film} />;
    case 'Detail':
      return  <TabDetail film={film}/>;
  }

  return <TabReviews filmReviews={filmReviews} />;
};

const Tabs = ({active, film, filmReviews}) => {
  return (
    <React.Fragment>  
      {getComponentByName(active, film, filmReviews)}
    </React.Fragment>
    )
}

export default Tabs;