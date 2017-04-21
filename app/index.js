"use strict";

var Generator = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var superb = require("superb");
var mkdirp = require("mkdirp");
var validator = require("validator");

module.exports = class extends Generator {
    prompting() {

        this.log(yosay(
            "Welcome to " + superb() + " python-bones!\n" +
            "I'll walk you through the installation."
        ));

        return this.prompt([{
            type: "input",
            name: "user",
            message: "What\'s your name",
            default: "user"
        }, {
            type: "input",
            name: "email",
            message: "What\'s your email adress?",
            default: "user@noreply.com",
            validate: function (input) {
                return validator.isEmail(input);
            }
        }, {
            type: "input",
            name: "projectID",
            message: "What\'s the name of your package?",
            default: "emptyproject"
        }, {
            type: "input",
            name: "desc",
            message: "How would you describe the project in a single sentence?",
            default: "description"
        }, {
            type: "input",
            name: "githubuser",
            message: "What\'s your github user name?",
            default: "githubuser"
        }]).then((answers) => {
            this.args = answers;
            this.config.set(this.args);
        });
    }

    writing() {

        this.fs.copyTpl(
            this.templatePath("docs/Makefile"),
            this.destinationPath("docs/Makefile"), {
                projectID: this.args.projectID
            });

        var conff = ["conf.py", "examples.rst", "index.rst", "modules.rst", "tutorial.rst"]
        for (var i in conff) {
            this.fs.copyTpl(
                this.templatePath("docs/source/" + conff[i]),
                this.destinationPath("docs/source/" + conff[i]), {
                    projectID: this.args.projectID,
                    desc: this.args.desc,
                    email: this.args.email,
                    user: this.args.user
                });
        }

        var fls = ["__init__.py", "emptyproject.py"]
        for (var i in fls) {
            this.fs.copyTpl(
                this.templatePath(fls[i]),
                this.destinationPath(this.args.projectID + "/" + fls[i]), {
                    projectID: this.args.projectID,
                    desc: this.args.desc,
                    email: this.args.email,
                    user: this.args.user
                });
        }

        this.fs.copyTpl(
            this.templatePath("setup.py"),
            this.destinationPath("setup.py"), {
                projectID: this.args.projectID,
                githubuser: this.args.githubuser,
                desc: this.args.desc,
                email: this.args.email,
                user: this.args.user,
            });

        this.fs.copyTpl(
            this.templatePath("meta.yaml"),
            this.destinationPath("meta.yaml"), {
                projectID: this.args.projectID,
                githubuser: this.args.githubuser,
                desc: this.args.desc
            });

        this.fs.copyTpl(
            this.templatePath("test.py"),
            this.destinationPath("tests/test_me.py"), {
                projectID: this.args.projectID,
                desc: this.args.desc,
                email: this.args.email,
                user: this.args.user
            });

        this.fs.copyTpl(
            this.templatePath("README.rst"),
            this.destinationPath("README.rst"), {
                projectID: this.args.projectID,
                githubuser: this.args.githubuser,
                desc: this.args.desc,
                email: this.args.email,
                user: this.args.user
            });

        this.fs.copyTpl(
            this.templatePath("TODO.md"),
            this.destinationPath("TODO.md"), {
                email: this.args.email,
                user: this.args.user
            });

        this.fs.copyTpl(
            this.templatePath("VERSIONS.md"),
            this.destinationPath("VERSIONS.md"), {
                email: this.args.email,
                user: this.args.user
            });

        var cops = [
            "bld.dat", "build.sh", "install.sh",
            "LICENSE", "MANIFEST.in", "requirements.txt",
            "setup.cfg", "test.sh"
        ];

        for (var i in cops) {
            this.fs.copy(
                this.templatePath(cops[i]),
                this.destinationPath(cops[i]));
        }

        var hcops = [
            "codecov.yml", "coveragerc", "gitignore",
            "gitattributes", "pylintrc", "travis.yml"
        ];

        for (var i in hcops) {
            this.fs.copy(
                this.templatePath(hcops[i]),
                this.destinationPath("." + hcops[i]));
        }
    }

    end() {
        this.config.save();
    }
};
