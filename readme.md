# GWD #

#### We assume you have pre-installed node.js with npm, Gulp, Bower.

Build process of project depend on [```Node.js```](https://nodejs.org). Used package managers its [```Bower```](https://bower.io/) and [```npm```](https://www.npmjs.com/get-npm). Core of builder is [```Gulp```](https://gulpjs.com/).

```bash
npm install bower -g
npm install -g gulp gulp-cli
```

#### Connect to the project

Clone repo:

```bash
git clone https://github.com/PipaStanislav/GWD.git
```

Install dependencies
```bash
npm install
bower install
```

#### Default run

To run project for developing :

```bash
gulp watch
```

To run build project for production :

```bash
gulp build
```
