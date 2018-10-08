'use strict';

var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");

beforeEach(function () {
    return helpers.run(path.join(__dirname, "../app"))
});

describe("python-bones:app", function () {
    it("builds files", function () {
        assert.file([
            "LICENSE",
            "README.rst",
            "TODO.md",
            "VERSIONS.md",
            "MANIFEST.in",
            ".gitignore", ".gitattributes",
            ".travis.yml", ".codecov.yml", ".coveragerc", ".pylintrc",
            "bld.dat", "build.sh", "install.sh",
            "build.sh", "emptyproject", "meta.yaml", "requirements.txt",
            "setup.py", "setup.cfg",
            "test.sh", "tests/test_me.py",
            "docs/Makefile", "docs/source/conf.py", "docs/source/examples.rst",
            "docs/source/index.rst", "docs/source/modules.rst", "docs/source/tutorial.rst",
            "emptyproject/__init__.py", "emptyproject/emptyproject.py",
            ".bandit.yml", "tox.ini"
        ]);
    });
});
