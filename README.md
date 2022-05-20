# React Purified

Safely use `dangerouslySetInnerHTML` in React by effortlessly sanitizing the input string. This package provides React components wrappers that use the [isomorphic-DOMPurify](https://github.com/kkomelin/isomorphic-dompurify) package to sanitize the string before passing to `dangerouslySetInnerHTML`. 

> :warning: Note: You should not use `dangerouslySetInnerHTML`, however in the use cases where you need it, this package might come handy.

**Table of contents**
- [React Purified](#react-purified)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Components](#components)
      - [PurifiedDiv](#purifieddiv)
      - [PurifiedSpan](#purifiedspan)
    - [Hook](#hook)
      - [usePurified](#usepurified)
  - [Testing](#testing)

## Installation

**npm**
```zsh
npm install react-purified
```

**yarn**
```zsh
yarn add react-purified
```

**pnpm**
```zsh
pnpm add react-purified
```

## Usage

### Components

#### PurifiedDiv

Your template will have a `<div>` container.
Every prop a `<div>` tag can get is valid.

```javascript
import { PurifiedDiv } from 'react-purified'

export const SomeComponent = props => {
  // your code

  return <Fragment>
    <PurifiedDiv dirty={ someDirtyString } />
  </Fragment>
}
```

#### PurifiedSpan

Your template will have a `<span>` container.
Every prop a `<span>` tag can get is valid.

```javascript
import { PurifiedSpan } from 'react-purified'

export const SomeComponent = props => {
  // your code

  return <Fragment>
    <PurifiedSpan dirty={ someDirtyString } />
  </Fragment>
}
```

### Hook

#### usePurified

The components in a hook form.

> :warning: * It is strongly encouraged to use the components. With the hook you run the risk of accidentally mutating the clean string which might invalidate the sanitizing.

```javascript
import { usePurified } from 'react-purified'

export const SomeComponent = props => {
  // your code
  const clean = usePurified(dirty)

  return <Fragment>
    <div dangerouslySetInnerHTML={{ __html: clean }} />
  </Fragment>
}
```

## Testing

You will need to configure `TextEncoder` and `TextDecoder` for your testing environment.

**Jest example**

```javascript
import { TextEncoder, TextDecoder } from 'util'

// your test env setup config

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
```