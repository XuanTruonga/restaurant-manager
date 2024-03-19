import LazyLoadingFullScreen from 'components/Customs/LoadingFullScreen';
import React, { Suspense } from 'react';

const Loaded = (Component) => (props) => {
  return (
    <Suspense fallback={<LazyLoadingFullScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loaded;
