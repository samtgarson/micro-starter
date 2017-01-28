# Micro Starter
> A Node microservice starter kit

Basic starter kit for a Node microservice using [Micro](https://github.com/zeit/micro) and other modern JS-y things.

## What do I get

- 🔷 [Micro](https://github.com/zeit/micro) for no fluff HTTP serving
- 📦 [Webpack](https://webpack.github.io/) for bundling with ES7 syntax
- 🚀 [AVA](https://github.com/avajs/ava) for speedy and easy to write tests
- ❤️ [XO](https://github.com/sindresorhus/xo) for no fuss linting
- 🤓 Development setup including file watching and server restarting for happy devs

### Setup

1. `git clone git@github.com:samtgarson/micro-starter.git my-app-name`
2. `cd my-app-name`
3. `bin/setup`

## Tell me more

### Helpers

- `yarn dev`: Run development server to watch your files
- `yarn build`: Build for production
- `yarn start`: Run application

### Testing

- `yarn test:spec`: Run tests with AVA
- `yarn test:lint`: Lint your code with XO
- `yarn test`: Run it all

### Environment

Don't check `build/env.js` into source control! Use it for env vars in development. You can keep `build/.env.example` updated with the environmental requirements of your app for other devs.

## Contribute

Please open issues/PRs.

Happy microservicing.
