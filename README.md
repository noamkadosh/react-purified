# React Purified

Safely use `dangerouslySetInnerHTML` in React by effortless sanitizing the input string.

**Table of contents**
- [React Purified](#react-purified)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Components](#components)
      - [PurifiedDiv](#purifieddiv)
      - [PurifiedSpan](#purifiedspan)
    - [Hook](#hook)
      - [usePurified](#usepurified)

## Installation

The tool is written in Node.js, but you can use it to run **any** commands.

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

### PurifiedDiv

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

### PurifiedSpan

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

### usePurified

The components in a hook form.

> :warning: * It is strongly encouraged to use the components. With the hook you run the risk of accidentally mutating the clean string (which might invalidate the sanitizing).

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
