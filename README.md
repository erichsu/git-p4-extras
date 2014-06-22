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
$ ln -s git-wrapper /usr/local/bin/git-wrapper
$ echo alias git=git-wrapper >> ~/.profile
$ source ~/.profile
```

[Brew](http://github.com/mxcl/homebrew/) (**Coming soon...**):

```bash
$ brew install git-p4-extras
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

Support **iTMMS**, **MUP-iOS** project for now.


```bash
$ git p4 build
```
