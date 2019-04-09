# Superilles Grid System

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Superilles is a grid system specifically designed for editorial websites (newspapers, media, magazines, etc). It uses CSS Grid Layout Module.

## Why Superilles
Grid design is heavily inspired by Barcelona's _superilles_. A _superilla_ (superblock in english) is a model of mobility that restructures the typical urban road network. Superblocks are made up of a grid of basic roads forming a polygon, some 400 by 400 meters, with both interior and exterior components. I love Barcelona so I decide to apply this concept to grid design for the web.

## The Grid
La griglia è composta da un numero prestabilito di superblocchi. La dimensione di ciascun superblocco è prestabilita e cambia a seconda della viewport. Quindi avremmo superblocchi di dimensioni diverse in base ai dispositivi utilizzati. 

### Dettagli
| Breakpoints | Colonne  | Grid Gap (px)  | Superblocks (px) | 
|---|---|---|---|
| @md 740px | 6  | 12 | 114 |
| @lg 1200px | 6  | 24 | 152 |
| @xl 1366px | 6  | 24 | 176 |
| @xxl 1440px | 12  | 24 | 96 |

### Templates
In base a questa griglia ho progettato diversi grid templates definendo aree specifiche in base all'utilizzo che viene fatto.
Sono inclusi i seguenti grid templates:
- Headlines
- Headlines Medium
- Headlines Mosaic

Ciascun template utilizza un numero prestabilito di righe. Nuovi templates saranno sviluppati a breve e aggiunti al progetto.

## Tech
Superilles uses a number of open source projects to work properly:
* [Nunjucks] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Gulp] - the streaming build system

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