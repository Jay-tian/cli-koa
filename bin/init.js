#!/usr/bin/env node
const program = require('commander')
const shell = require('shelljs');
const fs = require('fs-extra');
const git =  require('simple-git')();
const process = require('process');
const path = require('path');
const rootPath = process.cwd();

program
    .version('1.0.0', '-v, --version')
    .description('koa2 项目构建cli工具');

program
  .command('init <dir>')
  .action(function (dir, cmd) {
    fs.exists(dir, function (exists) {   
        if (!exists) {
            fs.copySync(path.join(__dirname, './../temp/'), path.join(rootPath, dir));
            console.error(dir+` 项目初始化成功`);
        } else {
            console.error(dir+` 项目已经存在`);
        }
    });

  })


program.parse(process.argv);