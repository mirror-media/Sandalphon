# Sandalphon
Monorepo for mirror-media-projects-next


### Monorepo setup
This is a monorepo containing sub-packages:
- [@mirror-media/birdbating](./packages/birdbating/): see `packages/birdbating`

This monorepo adopts `husky`, `lerna`, and `yarn workspaces`.
`husky` and `lerna` will
1. run eslint for needed sub-packages before `git commit`
2. run tests for needed sub-pacakges before `git push`

`yarn workspaces` will install dependencies of all the sub-packages wisely and effienciently.

### Development
Before modifying sub-packages' source codes, make sure you install dependencies on root. 
We need `husky` and `lerna` installed first.

### Installation
`yarn install`
