# Webpack Boilerplate

## Intro
This repo contains a minimal web project with Webpack & Webpack Dev Server support.

The code is based on the following YouTube tutorial series https://www.youtube.com/playlist?list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY

## How to use
We can use this project as a starting point for new projects in which we want to use WebPack.

Simply pull the repo to local directory and run the following command in the project directory.

  npm install

This command will pull from NPM all the dependencies listed in package.json

## Folder structure
Files are organized into two folders:
* **src** = source files - this is where we place all the files we create
* **dist** = contains files built by WebPack

### Webpack Dev Server
Webpack Dev Server servs it's files from memory, not from the dist folder.