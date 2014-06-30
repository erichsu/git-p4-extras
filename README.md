Git P4 Extras
===============

Extend git-p4 with internal service and handy p4 commands wrapper

Installation
------------

Dependencies:
- **git** 1.7 or newer
- **[p4 cli](http://www.perforce.com/product/components/perforce-clients-tools)** 2013.3/740675 or newer
- **[casperjs](http://casperjs.org)** 1.1.0 or newer

Clone / Tarball:

```bash
$ git clone --depth 1 https://github.com/erichsu/git-p4-extras.git
$ cd git-p4-extras
$ make install
$ echo alias git=git-p4-wrapper >> ~/.profile
$ source ~/.profile
```

[Brew](http://github.com/mxcl/homebrew/) (**Coming soon...**):

```bash
$ brew install git-p4-extras
```

GIT P4 Setup Tips
-----------------

If you are newbie for git-p4 toolkit, you may need to setup git-p4 config as well

Set default value of P4USER, P4PORT, P4CLIENT for p4 cli tool.

.profile
```bash
$ echo export P4USER="your_name" >> ~/.profile
$ echo export P4PORT="tw-p4proxy:1667" >> ~/.profile
$ echo export P4CLIENT="your_workspace" >> ~/.profile
$ source ~/.profile
```

${HOME}/.gitconfig
```bash
$ git config --global git-p4.port tw-p4proxy:1667
$ git config --global git-p4.user your_name
$ git config --global git-p4.client your_workspace
$ git config --global git-p4.skipsubmitedit true
```

Commands
--------

 - `git p4 integ`
 - `git p4 labels`
 - `git p4 build`

## git p4 integ

Merge P4 Dev to INT line
```bash
$ git p4 integ [Branch Map]
```

Setup default Branch Mapping name
```bash
$ git p4 integ --config
```

Create new branch mapping to P4 and set to default value
```bash
$ git p4 integ --new-branch
```

Setup default branch map:

```bash
$ git config --local git-p4.int-branch=<BranchMap>
```

## git p4 labels

List the last 10 labels of input keyword (case-insensitive)

```bash
$ git p4 labels <Keyword>
```

## git p4 build

**Intenal server only**

Submit CI build system job. (Required casperjs framework)

Setup default options for build.

```bash
$ git p4 build --config
```

Start submit a build job.

```bash
$ git p4 build
```
