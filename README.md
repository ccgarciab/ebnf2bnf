# Grammarizer
A formal grammar manipulation tool

## Setup

### Development dependencies

* [Java](https://openjdk.org/install/)
* The complete [ANTLR runtime](https://www.antlr.org/download.html)

### ANTLR setup

#### Option A: Use Intellij

* Download Intellij
* Download the ANTLR4 plugin
* In the grammar file, right click, configure ANTLR
* Configure Python3 as output language

#### Option B: configure the ANTLR CLI

```shell
$ export CLASSPATH=".:/usr/local/lib/antlr-4.9.3-complete.jar:$CLASSPATH"
$ alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.9.3-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
$ alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.9.3-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'
```

And now you can use ANTLR as

```shell
$ antlr4 -Dlanguage=Python3 grammar/grammarizer.g4
```

### Repository

```shell
$ git clone
$ cd grammarizer
$ virtualenv .venv
$ source .venv/bin/activate # Script instead of bin in Windows
$ pip install -r requirements.txt
```

## Usage

To do