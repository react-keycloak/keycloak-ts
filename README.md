# KeycloakTS <!-- omit in toc -->

> Typescript porting of [Keycloak](https://www.keycloak.org/) javascript client

## :construction: WIP: Under development :construction: <!-- omit in toc -->

[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak/keycloak-ts?label=npm%20%7C%20keycloak-ts)](https://www.npmjs.com/package/@react-keycloak/keycloak-ts)

[![License](https://img.shields.io/github/license/react-keycloak/keycloak-ts.svg)](https://github.com/react-keycloak/keycloak-ts/blob/master/LICENSE)
[![Github Issues](https://img.shields.io/github/issues/react-keycloak/keycloak-ts.svg)](https://github.com/react-keycloak/keycloak-ts/issues)

[![Gitter](https://img.shields.io/gitter/room/react-keycloak/community)](https://gitter.im/react-keycloak/community)

---

## Table of Contents <!-- omit in toc -->

- [Install](#install)
- [Getting Started](#getting-started)
  - [Create a custom KeycloakAdapter](#create-a-custom-keycloakadapter)
  - [Setup Keycloak instance](#setup-keycloak-instance)
- [Contributing](#contributing)
- [License](#license)

---

## Install

```sh
yarn add @react-keycloak/keycloak-ts
```

or

```sh
npm install @react-keycloak/keycloak-ts
```

## Getting Started

**KeycloakTS** provides a porting of the original [Keycloak javascript adapter](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter) to allow better extensibility and usage on different platform by using custom adapters.

### Create a custom KeycloakAdapter

Create a class which implements the `KeycloakAdapter` interface

```ts
import type { KeycloakAdapter } from '@react-keycloak/keycloak-ts';

// Wrap everything inside ReactNativeKeycloakProvider
class MyCustomAdapter implements KeycloakAdapter {
  ...
};

export default MyCustomAdapter;
```

### Setup Keycloak instance

```ts
import { KeycloakClient } from '@react-keycloak/keycloak-ts';

import MyCustomAdapter from './adapter.ts';

// Setup Keycloak client as needed
// Pass initialization options as required
const keycloak = new KeycloakClient({
  url: 'http://keycloak-server/auth',
  realm: 'kc-realm',
  clientId: 'web'
});

// Call init passing a custom adapter

keycloak.init({
  adapter: MyCustomAdapter,
});

export default keycloak;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
