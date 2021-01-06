# Swimlane Eslint Rules

Rules for [eslint](https://github.com/eslint/eslint) used in Swimlane's Javascript (etc) development.

## Javascript (es6)

Install:

```sh
npm install --save-dev eslint @swimlane/eslint-config eslint-plugin-security
```

Create an .eslintrc.yml file with the following:

```yaml
env:
  browser: true
  commonjs: true
  es2021: true
extends:
  - '@swimlane'
parserOptions:
  ecmaVersion: 12
```

## TypeScript

Install:

```sh
npm install --save-dev eslint @swimlane/eslint-config eslint-plugin-security
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Create an `.eslintrc.yml` file with the following:

```yaml
env:
  browser: true
  es2021: true
  node: true
extends:
  - '@swimlane/eslint-config/typescript'
parserOptions:
  ecmaVersion: 12
  sourceType: module
```

## Prettier

If using prettier (for example [@swimlane/prettier-config-swimlane](https://github.com/swimlane/prettier-config-swimlane)) you should follow instructions in the [eslint-config-prettier readme](https://github.com/prettier/eslint-config-prettier#readme) to install and setup `eslint-config-prettier`. For example for es6 config your
`.eslintrc.yml` file will be:

```yaml
env:
  browser: true
  commonjs: true
  es2021: true
extends:
  - '@swimlane'
  - 'prettier'
parserOptions:
  ecmaVersion: 12
```

## Credits

`@swimlane/eslint-config` is a [Swimlane](http://swimlane.com) open-source project; we
believe in giving back to the open-source community by sharing some of the
projects we build.

[Swimlane](http://www.swimlane.com) is an automated cyber security operations and incident response
platform that enables cyber security teams to leverage threat intelligence,
speed up incident response and automate security operations.
