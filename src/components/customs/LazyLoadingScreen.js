import nProgress from 'nprogress';
import { useEffect } from 'react';

function LazyLoadingScreen() {
  nProgress.configure({ showSpinner: false });

  useEffect(() => {
    nProgress.start();
    return () => nProgress.done();
  }, []);
  return null;
}

export default LazyLoadingScreen;
