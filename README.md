<p float="left">
  <img src="https://single-spa.js.org/img/logo-white-bgblue.svg" width="50" height="50">
  <img src="https://vuejs.org/images/logo.png" width="50" height="50">
</p>

[![npm version](https://img.shields.io/npm/v/single-spa-auth-app.svg?style=flat-square)](https://www.npmjs.org/package/single-spa-auth-app)
[![](https://data.jsdelivr.com/v1/package/npm/single-spa-auth-app/badge)](https://www.jsdelivr.com/package/npm/single-spa-auth-app)

# single-spa-auth-app

This is a Vue application example used as NPM package in [single-spa-login-example-with-npm-modules](https://github.com/jualoppaz/single-spa-login-example-with-npm-modules) in order to register an application. See the installation instructions there.

## ✍🏻 Motivation

This is a vue application built as library which only contains the login form in order to perform the required login.

## How it works ❓

There are several files for the right working of this application and they are:

- src/singleSpaEntry.js
- package.json
- vue.config.js

### src/singleSpaEntry.js

```javascript
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import VueToastr from 'vue-toastr';
import singleSpaVue from 'single-spa-vue';
import { BootstrapVue } from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultPreventDuplicates: true,
  defaultTimeout: 0,
});

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#auth-app',
    render: (h) => h(App),
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
```

The **eslint** comments are indicated due to **webpack external** dependencies. Without the **eslint** comments the build process will fail.
The **vueLifecycles** object contains all **single-spa-vue** methods for the **single-spa** lifecycle of this app. All used config is default one but the custom config of the **el** option. It's assumed that an element with **auth-app** id is defined in the **index.html** where this application will be mounted.

### package.json

```json
{
  "name": "single-spa-auth-app",
  "version": "0.1.1",
  "description": "Vue application with login form for be included in a single-spa application as registered app.",
  "main": "dist/single-spa-auth-app.umd.js",
  "scripts": {
    "build": "vue-cli-service build --target lib --formats umd --name single-spa-auth-app src/singleSpaEntry.js",
    "lint": "vue-cli-service lint"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "4.1.0",
    "@vue/cli-plugin-eslint": "4.1.0",
    "@vue/cli-service": "4.1.0",
    "babel-eslint": "10.0.3",
    "core-js": "3.4.4",
    "eslint": "5.16.0",
    "eslint-config-airbnb-base": "14.0.0",
    "eslint-plugin-import": "2.20.0",
    "eslint-plugin-vue": "5.0.0",
    "node-sass": "4.13.1",
    "sass-loader": "8.0.2",
    "vue-cli-plugin-single-spa": "1.1.0",
    "vue-template-compiler": "2.6.11",
    "webpack": "4.41.5"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/jualoppaz/single-spa-auth-app.git"
  },
  "keywords": [
    "single-spa",
    "login",
    "npm",
    "webpack",
    "vue",
    "bootstrap-vue",
    "bootstrap"
  ],
  "author": "Juan Manuel López Pazos",
  "bugs": {
    "url": "https://github.com/jualoppaz/single-spa-auth-app/issues"
  },
  "homepage": "https://github.com/jualoppaz/single-spa-auth-app#readme"
}
```

There are only two scripts in this project:

- **build**: for compile the application and build it as a **libray** in **umd** format
- **lint**: for run **eslint** in all project

There are only **devDependencies** because the application dependencies are defined as **webpack externals**.
