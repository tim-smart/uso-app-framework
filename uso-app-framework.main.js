// ==UserScript==
// @name           uso-app-framework
// @namespace      http://userscripts.org/users/tim
// @license        MIT style license. Full terms: http://github.com/Tim-Smart/uso-app-framework/raw/master/LICENSE
// @copyright      (c) 2009 Tim Smart
// @version        0.1 Alpha
// ==/UserScript==

#include "library.js"

#include "controller.class.js"
#include "model.class.js"
#include "view.class.js"
#include "mainController.class.js"
#include "loader.class.js"
#include "config.class.js"

var controller = new MainController(),
load = new Loader(),
model = {};

var config = new Config();
