import LazyLoadingFullScreen from 'components/Basic/LoadingFullScreen';
import React, { Suspense } from 'react';

const Loaded = (Component) => (props) => {
  return (
    <Suspense fallback={<LazyLoadingFullScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loaded;
