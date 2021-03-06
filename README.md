# retro-game-finder

A retro game finder site powered by RAWG.io data.

The project is based on my previous [video-games-on-RAWG-react-app](https://github.com/theDavidBarton/video-games-on-RAWG-react-app) project.

## a React.Js app with Express backend

An experimental project with the **RAWG** api and **Archive.org's** search api.

## Local run

**Express backend:** `yarn`, `yarn start`

**React.Js frontend:** `cd client`, `yarn` & `yarn start`

## Simplified API docs

- `GET` **/api/trending** - used on the home page
- `GET` **/api/topRatedRecommended** - used e.g. in the header components' bg image
- `GET` **/api/videogame/{id}** - the content of a specific game
- `GET` **/api/videogameAutocomplete?q={query}**; `?q=` (mandatory) - used in the search input component's autocomplete
- `GET` **/api/searchArchive?title={query}&year={query}**; `?title=` (mandatory); `?year=` (mandatory) - searches in Archive.org's collection if an older game has an online playable version on their servers.
- `GET` **/api/searchOldgameshelf?title={query}**; `?title=` (mandatory) - searches in OldGameShelf.com's collection if a NES game has an online playable version on their page.
- `GET` **/api/searchSnesnow?title={query}**; `?title=` (mandatory) - searches in SnesNow.com's collection if a SNES game has an online playable version on their page.

See in details: [server.js](./server.js).

# License

MIT License

Copyright (c) 2021 David Barton

# Credits

## Used data

Powered by [RAWG.io](https://rawg.io/apidocs) video game data. Thank you guys!

Powered by [Archive.org](https://archive.org/help/aboutsearch.htm) video game links. This app links some titles to the biggest web archive of the internet. Thanks Archive.org!

Powered by [OldGameShelf.com](https://oldgameshelf.com/) video game links. This app links some titles to OldGameShelf.com which is a brilliant website to play all the retro games of the Nintendo NES system. Thanks OldGameShelf.com!

Powered by [SnesNow.com](https://snesnow.com/) video game links. This app links some titles to SnesNow.com which is a brilliant website to play all the retro games of the SNES system. Thanks SnesNow.com!

## Used font

'Arcade Classic' is under copyright (c) Jakob Fischer at www.pizzadude.dk, all rights reserved.
