# Python-bones

[![Project Status](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![travis](https://travis-ci.org/dirmeier/python-bones.svg?branch=master)](https://travis-ci.org/dirmeier/python-bones)
[![appveyor](https://ci.appveyor.com/api/projects/status/6kpnkmlva9hio2hc?svg=true)](https://ci.appveyor.com/project/dirmeier/python-bones)
[![codecov](https://codecov.io/gh/dirmeier/python-bones/branch/master/graph/badge.svg)](https://codecov.io/gh/dirmeier/python-bones)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cc7de342ad8245129d5cd1e1df98fb62)](https://www.codacy.com/app/simon-dirmeier/python-bones?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dirmeier/python-bones&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/generator-python-bones.svg)](https://www.npmjs.com/package/generator-python-bones)
[![npm download](https://img.shields.io/npm/dt/generator-python-bones.svg)](https://www.npmjs.com/package/generator-python-bones)

A yeoman generator for Python projects.

## Introduction

`python-bones` is a yeoman-generator for `Python`-projects using `setuptools`. Projects created with `python-bones` are ready for publication to `pypi` and `conda`. The generator creates a package barebone that support:

* a standard `setup.py`, `setup.cfg`, `MANIFEST.in`,
* project automationg `tox`,
* static code analysis and reports using `pylint`, `flake8` and `bandit`,
* a unit-test suite using `pytest/unittest`,
* `build.sh`, `bld.dat` and `meta.yaml` for `conda` packages,
* documentation with `readthedocs.io` and `sphinx`,
* badges for the *project status*, *build status* using Travis CI and *code coverage* using Codecov,
* custom README.md, TODO.md and VERSIONS.md files,
* `.gitignore`, `.gitattributes`, `.travis.yml`, `coveragerc`,
* a GPL3 license.

The resulting folder-structure looks like this:

```sh
    |____.codecov.yml
    |____.coveragerc
    |____.gitattributes
    |____.gitignore
    |____.pylintrc
    |____.travis.yml
    |____.yo-rc.json
    |____bld.dat
    |____build.sh
    |____docs
    | |____Makefile
    | |____source
    | | |____conf.py
    | | |____examples.rst
    | | |____index.rst
    | | |____modules.rst
    | | |____tutorial.rst
    |____emptyproject
    | |______init__.py
    | |____emptyproject.py
    |____install.sh
    |____LICENSE
    |____MANIFEST.in
    |____meta.yaml
    |____README.rst
    |____requirements.txt
    |____setup.cfg
    |____setup.py
    |____test.sh
    |____tests
    | |____test_me.py
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

This builds the skeleton. Afterwards modify the sources and documentation and build both using:

```sh
  pip install -e .
  cd docs && make html
```

## Author

* Simon Dirmeier <a href="mailto:simon.dirmeier@web.de">simon.dirmeier@web.de</a>
