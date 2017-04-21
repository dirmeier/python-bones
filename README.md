<h1 align="center"> python-bones </h1>

[![Project Status](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![travis](https://travis-ci.org/dirmeier/python-bones.svg?branch=master)](https://travis-ci.org/dirmeier/python-bones)
[![appveyor](https://ci.appveyor.com/api/projects/status/ugxd2285camqs6ud/branch/master?svg=true)](https://ci.appveyor.com/project/dirmeier/python-bones/branch/master)
[![codecov](https://codecov.io/gh/dirmeier/python-bones/branch/master/graph/badge.svg)](https://codecov.io/gh/dirmeier/python-bones)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fc5f2b85be274404990b9282eeaa484d)](https://www.codacy.com/app/simon-dirmeier/python-bones?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dirmeier/java-bones&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/generator-python-bones.svg)](https://www.npmjs.com/package/generator-python-bones)
[![npm download](https://img.shields.io/npm/dt/generator-python-bones.svg)](https://www.npmjs.com/package/generator-python-bones)

A yeoman generator for Python projects.

## Introduction

`python-bones` is a yeoman-generator for `Python`-projects using `setuptools`. Projects created with `python-bones` are ready for publication to `pypi` and `conda`. The generator creates

* a GPL3 license,
* static code analysis and reports using `pylint`,
* a unit-test suite using `pytest/unittest` and standard logging,
* badges for the *project status*, *build status* using Travis CI and *code coverage* using Codecov,
* custom README.md, TODO.md and VERSIONS.md files and
* a prototype `__init__.py` + `test.py`.

The resulting folder-structure looks like this:

```sh
	|____.codecov.yml
	|____.gitattributes
	|____.gitignore
	|____.travis.yml
	|____.yo-rc.json
	|____build.sh
	|____checkstyle.xml
	|____emptyproject4j
	|____LICENSE
	|____pom.xml
	|____README.md
	|____ruleset.xml
	|____src
	| |____main
	| | |____java
	| | | |____net
	| | | | |____groupID
	| | | | | |____emptyproject4j
	| | | | | | |____Main.java
	| |____test
	| | |____java
	| | | |____net
	| | | | |____groupID
	| | | | | |____tests
	| | | | | | |____emptyproject4j
	| | | | | | | |____TestSuite.java
	|____TODO.md
	|____VERSIONS.md
```

## Installation

Yeoman comes with [```npm```](https://nodejs.org/en/download/current/), so install it first and then call:

```sh
  npm install -g yo
  npm install -g generator-python-bones
```

Once you have the package, you can create a scaffold using:

```sh
  yo python-bones
```

This builds the skeleton. Afterwards modify the sources and build the package with:

```sh
  ./${packageID}
```

where `${packageID}` will be the name of your package.

## Author

* Simon Dirmeier <a href="mailto:mail@simon-dirmeier.net">mail@simon-dirmeier.net</a>
