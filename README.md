<img src="docs-src/static/images/harmonium-logo.png" width="400px"/>

[![NPM Version][npm-badge]][npm-url]
[![Travis Build Status][travis-badge]][travis-url]
[![Dependency Status](https://dependencyci.com/github/revelrylabs/harmonium/badge)](https://dependencyci.com/github/revelrylabs/harmonium)
[![Coverage Status](https://coveralls.io/repos/github/revelrylabs/harmonium/badge.svg?branch=master)](https://coveralls.io/github/revelrylabs/harmonium?branch=master)

Harmonium is a framework of React components optimized for teams that want to ship apps fast. It is a curated list of components that work together and have cohesive styles. One of our design goals is that you never have to research and handpick component packages. Whatever you need is already here.

A gallery of components is at https://harmonium.revelry.co.

## Installation

To install the toolkit for use in your project:

```sh
npm install --save harmonium
```

## Usage

You can import components and use components from the toolkit like:

```jsx
import Col from 'harmonium/lib/Col'
import Row from 'harmonium/lib/Row'
import Callout from 'harmonium/lib/Callout'

function Hello() {
  return (
    <Row>
      <Col>
        <Callout>Hello, world.</Callout>
      </Col>
    </Row>
  )
}
```

See the example site at https://harmonium.revelry.co for more examples of how to
use the components in your projects.

## SCSS

We don't just provide JavaScript. We've built a set of SCSS styles for all the
components. It is in the `scss` directory of the package. You can either copy it
into your project's SCSS directory, or use a tool like [`sassy-npm-importer`](https://github.com/revelrylabs/sassy-npm-importer) to
import it from the package.

## Configuration

At this time, there's no package level configuration-- all options as passed as
props to the components at time of use.

## Contributing and Development

See [CONTRIBUTING.md](https://github.com/revelrylabs/harmonium/blob/master/CONTRIBUTING.md)
for guidance on how to develop harmonium.

Bug reports and pull requests are welcome on GitHub at https://github.com/revelrylabs/harmonium. Check out [CONTRIBUTING.md](https://github.com/revelrylabs/harmonium/blob/master/CONTRIBUTING.md) for more info.

Everyone is welcome to participate in the project. We expect contributors to
adhere the Contributor Covenant Code of Conduct (see [CODE_OF_CONDUCT.md](https://github.com/revelrylabs/harmonium/blob/master/CODE_OF_CONDUCT.md)).

[npm-badge]: https://img.shields.io/npm/v/harmonium.svg
[npm-url]: https://www.npmjs.com/package/harmonium
[travis-badge]: https://img.shields.io/travis/revelrylabs/harmonium.svg
[travis-url]: https://travis-ci.org/revelrylabs/harmonium

## License

See [LICENSE](https://github.com/revelrylabs/harmonium/blob/master/LICENSE) for details.
