import React, { useState, useEffect, useCallback } from 'react';
import Search from './search';
import github from './../img/github.svg';

export default function Header() {
  const [data, setData] = useState(null);
  const [dataIsReady, setDataIsReady] = useState(false);
  const domain = process.env.NODE_ENV === 'production' ? 'https://retro-game-finder-backend.onrender.com' : '';

  const getRawgApi = useCallback(async () => {
    try {
      const response = await fetch(`${domain}/api/topRatedRecommended`);
      const json = await response.json();
      setData(json);
      setDataIsReady(true);
    } catch (e) {
      console.error(e);
    }
  }, [domain]);

  useEffect(() => {
    getRawgApi();
  }, [getRawgApi]);

  const getBackground = () => {
    const backgroundPath = data.background_image;
    let background;
    if (window.innerWidth > 1024) {
      background = backgroundPath.match(/media\/screenshots/)
        ? backgroundPath.replace('media/screenshots', 'media/resize/1280/-/screenshots')
        : backgroundPath.replace('media/games', 'media/resize/1280/-/games');
    } else {
      background = backgroundPath.match(/media\/screenshots/)
        ? backgroundPath.replace('media/screenshots', 'media/resize/420/-/screenshots')
        : backgroundPath.replace('media/games', 'media/resize/420/-/games');
    }
    return background;
  };

  const imagePlacement = dataIsReady
    ? 'linear-gradient(0deg, rgba(52,58,64,1) 0%, rgba(52,58,64,0) 100%), url(' + getBackground() + ')'
    : 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)';

  return (
    <nav
      className='bg-dark pb-3'
      style={{
        backgroundImage: imagePlacement,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <header className='container text-white'>
        <div className='row justify-content-md-center'>
          <div className='col my-4'>
            <a className='decoration-none text-warning display-4' href='/'>
              RETRO GAME FINDER
            </a>
          </div>
          <div className='col-md-auto col-12 align-self-end order-1 order-md-0'>
            <Search />
          </div>
          <div className='col-auto col-mob align-self-center'>
            <a href='https://github.com/theDavidBarton/retro-game-finder' target='_blank' rel='noopener noreferrer'>
              <img className='float-left social-img-style' alt='github logo' src={github} />
            </a>
          </div>
        </div>
      </header>
    </nav>
  );
}
