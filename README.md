# 轱辘 - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/myl2017/gulu.svg?branch=master)](https://travis-ci.org/myl2017/gulu)

## 介绍
作者：孟艳利  
这是我在学习 Vue 过程中的一个 UI 框架，希望对你有用。

## 开始使用
1、添加 css 样式
   使用本框架前，请在 css 中开启 border-box
   
  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。
  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  ```
  :root {
              --button-height: 32px;
              --font-size: 14px;
              --button-bg: white;
              --button-active-bg: #eee;
              --border-radius: 4px;
              --color: #333;
              --border-color: #999;
              --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式。
2、安装
    ```
    npm i --save mengyl-test-1
    ```
3、引入 gulu
   ```
   import {Button, ButtonGroup, Icon} from 'mengyl-test-1'
   import 'mengyl-test-1/dist/index.css'
   
   export default {
      name: 'app',
      components: {
        'g-button': Button,
        'g-icon': Icon
      }
   }
   ```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码



