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

## Angular

For angular projects you should use the `@angular-eslint/schematics` as described [here](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-before-v12) and then add the following to your `.eslintrc.yml` file:

```yaml
root: true
extends:
  - '@swimlane'
  - prettier
overrides:
  - files:
      - '*.ts'
    parser: '@typescript-eslint/parser'
    parserOptions:
      project:
        - tsconfig.json
      createDefaultProgram: true
    extends:
      - '@swimlane/eslint-config/typescript'
      - plugin:@angular-eslint/recommended
      - plugin:@angular-eslint/template/process-inline-templates
      - prettier
  - files:
      - '*.html'
    extends:
      - plugin:@angular-eslint/template/recommended
```

## Versioning Policy

- Major (new linting errors)

  - A new rule is added
  - An existing rule is made more strict
  - A new plugin is added to an existing config
  - A existing plugin is updated to be more strict

- Minor (same or fewer linting errors)

  - A rule is removed
  - An existing rules is made less strict
  - Adding a new configuration
  - A existing plugin is updated to be less strict

- Patch (non-user-facing changes)

  - Changes to documentation
  - Fixes for build or publication
  - Modifying tests

## Publish steps

- Checkout main (`git checkout main`)
- Pull master (`git pull`)
- Examine `CHANGELOG.md` to determine next version (X.Y.Z)
- Run np (`npm run np`)

## Credits

`@swimlane/eslint-config` is a [Swimlane](http://swimlane.com) open-source project; we
believe in giving back to the open-source community by sharing some of the
projects we build.

[Swimlane](http://www.swimlane.com) is an automated cyber security operations and incident response
platform that enables cyber security teams to leverage threat intelligence,
speed up incident response and automate security operations.
