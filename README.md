# Swimlane Lint Rules - Javascript

[![npm version](https://badge.fury.io/js/eslint-config-swimlane.svg)](https://badge.fury.io/js/eslint-config-swimlane)

Rules for [eslint](https://github.com/eslint/eslint) used in Swimlane's Javascript (etc) development.

## Javascript

Install:

```sh
npm install --save-dev eslint @swimlane/eslint-config
```

Create an .eslintrc.yml file with the following:

```yaml
extends: @swimlane
```
## ESnext

Install:

```sh
npm install --save-dev eslint @swimlane/eslint-config
npm install --save-dev eslint-config-esnext eslint-plugin-security
```

Create an .eslintrc.yml file with the following:

```yaml
extends: @swimlane/eslint-config/esnext
```

## Node

Install:

```sh
npm install --save-dev eslint @swimlane/eslint-config
npm install --save-dev eslint-config-esnext eslint-plugin-security
npm install --save-dev eslint-config-node
```

Create an .eslintrc.yml file with the following:

```yaml
extends: @swimlane/eslint-config/node
```

## TypeScript

Install:

```sh
npm install --save-dev eslint @swimlane/eslint-config
npm install --save-dev eslint-config-esnext eslint-plugin-security
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Create an .eslintrc.yml file with the following:

```yaml
extends: @swimlane/eslint-config/typescript
```

## Credits

`@swimlane/eslint-config` is a [Swimlane](http://swimlane.com) open-source project; we
believe in giving back to the open-source community by sharing some of the
projects we build.

[Swimlane](http://www.swimlane.com) is an automated cyber security operations and incident response
platform that enables cyber security teams to leverage threat intelligence,
speed up incident response and automate security operations.
