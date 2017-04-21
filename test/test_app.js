'use strict';

var path    = require("path");
var assert  = require("yeoman-assert");
var helpers = require("yeoman-test");

beforeEach(function () {  
  return helpers.run(path.join(__dirname, "../app"))
})

describe("java-bones:app", function () {
  it("builds files", function () {
    assert.file([
      "LICENSE", 
      "README.md", 
      "TODO.md", 
      "VERSIONS.md", 
      ".gitignore", ".gitattributes", 
      ".travis.yml", ".codecov.yml",     
      "build.sh", "emptyproject4j", 
      "checkstyle.xml", "ruleset.xml",       
      "pom.xml",
      "src/main/java/net/groupID/emptyproject4j/Main.java",
      "src/test/java/net/groupID/tests/emptyproject4j/TestSuite.java"]);
  });
});
