// ==UserScript==
// @name           uso-app-framework
// @namespace      http://userscripts.org/users/tim
// @license        MIT style license. Full terms: http://github.com/Tim-Smart/uso-app-framework/raw/master/LICENSE
// @copyright      (c) 2009 Tim Smart
// @version        0.1 Alpha
// ==/UserScript==

#include "misc.js"

#include "controller.class.js"
#include "model.class.js"
#include "view.class.js"

// The global variables
#include "mainController.class.js"
#include "loader.class.js"
var controller = new MainController(),
load = new Loader(),
model = {};

// Config prototype
#include "config.class.js"
var config = new Config();

// Settings prototype
#include "settings.class.js"
var settings = $s = new Settings();
