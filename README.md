# Pokémon Gallery

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Setting up locally and installing dependencies

```bash
git clone git@github.com:thinkholic/pokemon-gallery.git
cd pokemon-gallery
npm install // or yarn
```

### Start application

```bash
npm start // yarn start
```

### Formatting the codebase

```
npm run format
```

### Tests

```bash
npm run test
```

## Notes

- Used [Create React App](https://github.com/facebook/create-react-app) with TypeScript template to bootstrap the application
- Configured `ESLint` and `Prettier` for basic quality gates
- Enabled absolute imports
- Used `styled-components` for styling
- Didn't use `Redux` or any third-party state management startegy as it's an overkill for the provided scope.
- File structure has orgnized in scalable manner
- Added some comments mentioning some improvement points.

## Known Issues (Added later on March 25, 2022)

- There is an issue when syncing state with local storage. The problem occured due to asynchronous of nature of `useState` hook, and should've considered that when updating. `(src/modules/Pokemons/index.js:34-54)`.
