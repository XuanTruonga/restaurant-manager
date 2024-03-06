import LazyLoadingScreen from 'components/customs/LazyLoadingScreen';
import React, { Suspense } from 'react';

const Loaded = (Component) => (props) => {
  return (
    <Suspense fallback={<LazyLoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loaded;
