# Angular QuickStart Source

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## How to setup the app and get it running

Clone this repo into new project folder.
```bash
git clone https://github.com/ewolution94/heroes-tutorial-spielwiese heroes-tutorial-spielwiese
cd heroes-tutorial-spielwiese
```

If you do not wish/want to commit any changes but rather working on an "offline" version:

> Delete the .git-Folder

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

### YOU ARE NOW READY
