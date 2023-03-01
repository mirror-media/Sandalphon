# [@mirror-weekly/react-component](https://www.npmjs.com/package/@mirror-weekly/react-component) &middot; ![npm version](https://img.shields.io/npm/v/@mirror-weekly/react-component.svg?style=flat)

## Feature

- `@mirror-weekly/react-component` 整理了 [`Mirror Weekly`](https://www.mirrormedia.mg/) (鏡週刊）靜態專題所需之共用元件。
- 詳細使用方式可參閱各元件的 README.md。

### Components

- [鏡週刊 LOGO](./src/logo): see [src/logo](./src/logo)
- [延伸閱讀](./src/related-post): see [src/related-post](./src/related-post)

## How to Use This Pkg?

1. Install the npm [package](https://www.npmjs.com/package/@mirror-weekly/react-component)
   `yarn add @mirror-weekly/react-component`
2. Import component in the desired place

## Installation

`yarn install`

## Development

```
$ yarn dev
// or
$ npm run dev
// or
$ make dev
```

## Build (Webpack Bundles and ES5 Transpiling)

```
$ yarn build
// or
$ npm run build
// or
$ make build
```

### Transpile React, ES6 Codes to ES5

```
$ make build-lib
```

### NPM Publish

After executing `Build` scripts, we will have `/lib` folders,
and then we can execute publish command,

```
npm publish
```

Note: before publish npm package, we need to bump the package version first.

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
