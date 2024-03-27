/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

function IndeterminateCheckbox({ indeterminate, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);
  return (
    <input
      type='checkbox'
      style={{ cursor: 'pointer', width: '15px', height: '15px' }}
      defaultValue=''
      ref={ref}
      {...rest}
      checked={rest.checked ? rest.checked : null}
    />
  );
}

export default IndeterminateCheckbox;
