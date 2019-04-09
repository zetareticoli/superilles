# Superilles Grid System

Superilles is a grid system specifically designed for editorial websites (newspapers, media, magazines, etc). It uses CSS Grid Layout Module.

## Why Superilles
Grid design is heavily inspired by Barcelona's _superilles_. A _superilla_ (superblock in english) is a model of mobility that restructures the typical urban road network. Superblocks are made up of a grid of basic roads forming a polygon, some 400 by 400 meters, with both interior and exterior components. I love Barcelona so I decide to apply this concept to grid design for the web.

## The Grid
The grid is composed of a predetermined number of superblocks. The size of each superblock is predetermined and changes according to the viewport. So we would have superblocks of different sizes based on the devices used. 

### Dettagli
| Breakpoints | Colonne  | Grid Gap (px)  | Superblocks (px) | 
|---|---|---|---|
| @md 740px | 6  | 12 | 114 |
| @lg 1200px | 6  | 24 | 152 |
| @xl 1366px | 6  | 24 | 176 |
| @xxl 1440px | 12  | 24 | 96 |

### Templates
On the basis of this grid I have designed several grid templates defining specific areas based on the use being made.
The following grid templates are included:
- Headlines
- Headlines Medium
- Headlines Mosaic

Each template uses a predetermined number of lines. New templates will be developed soon.

## Tech
Superilles uses a number of open source projects to work properly:
* [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) - HTML enhanced for web apps!
* [node.js](https://nodejs.org/)  - evented I/O for the backend
* [Gulp](https://gulpjs.com)  - the streaming build system

And of course Superilles itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Superilles requires [Node.js](https://nodejs.org/) v4+ to run.

Clone repo from github:
```
$ git clone git@github.com:zetareticoli/superilles.git
```

Install the dependencies and devDependencies and start the server:
```
$ cd superilles
$ npm install -d
$ gulp
```

## Development
Want to contribute? Great! [Create an issue](https://github.com/zetareticoli/superilles/issues/new)

## License
MIT