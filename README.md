# Accurat React Components

Collection of React components used for [Accurat](http://www.accurat.it/) projects.

The purpose is to provide ready-to-use, easily customizable UI components to set up web projects.
They're also useful for quick prototypes.

## Install

`yarn add @accurat/react-components`

## Usage

```js
import { Button, Select, Checkbox } from '@accurat/react-components'
```

The component is designed to be easily customizable using [tachyons](http://tachyons.io/) classes, like this:

```js
<Button className="br-pill bg-blue hover-bg-dark-blue">Click</Button>
```

Alternatively, you can also pass a `style` attribute as a `prop`.

```js
<Button style={{ backgroundColor: 'blue' }}>Click</Button>
```
