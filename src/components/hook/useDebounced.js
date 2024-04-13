/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

const useDebounce = (value, delay = 400) => {
  const [debounceValue, setDebounceValue] = useState(null);
  const timer = useRef(null);

  useEffect(() => { 
    if (debounceValue !== value) {
      timer.current = window.setTimeout(() => {
        setDebounceValue(value);
      }, delay);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
