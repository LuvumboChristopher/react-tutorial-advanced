import React from 'react';

const ErrorExample = () => {
  let title = 'ramdomtitle';
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button
        type='button'
        className='btn'
        onClick={() => {
          title = 'hello people';
          console.log(title);
        }}
      >
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
