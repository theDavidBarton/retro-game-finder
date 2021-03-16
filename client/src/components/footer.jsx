import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-light'>
      <div className='container py-3'>
        <div className='row justify-content-md-center'>
          <div className='col align-self-center text-center'>
            <p className='decoration-none text-warning display-4'>RETRO GAME FINDER</p>
            <p className='text-center mt-2'>copyright © 2021 theDavidBarton</p>
          </div>
          <div className='col align-self-end'>
            <p className='lead'>
              Check out popular retro video game titles in the RAWG database.
              <br />
              Powered by{' '}
              <a className='text-light bg-dark' href='https://rawg.io/'>
                RAWG.io
              </a>
              !
            </p>
            <p>
              <span className='badge badge-dark'>#RAWG.io</span> <span className='badge badge-warning'>#retro</span>{' '}
              <span className='badge badge-light'>#ReactJS</span> <span className='badge badge-danger'>#bootstrap</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
