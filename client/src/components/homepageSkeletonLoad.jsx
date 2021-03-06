import React from 'react';

export default function SkeletonLoad() {
  return (
    <div className='col-md-6'>
      <div className='card text-decoration-none border-0'>
        <div className='text-center'>
          <div className='img-zoom-container'>
            <div
              className='row img-style bg-secondary text-center p-5'
              style={{ minHeight: '185px', borderRadius: '0px 0px 0px 0px' }}></div>
          </div>
        </div>
        <div className='card-body'>
          <p className='w-100 mb-1 text-secondary bg-secondary'>&zwnj;</p>
          <p className='w-50 mb-1 text-secondary bg-secondary'>&zwnj;</p>
          <p className='w-75 mb-1 text-secondary bg-secondary'>&zwnj;</p>
          <p className='w-100 mb-1 text-secondary bg-secondary'>&zwnj;</p>
          <p className='w-50 mb-0 text-secondary bg-secondary'>&zwnj;</p>
        </div>
      </div>
    </div>
  );
}
