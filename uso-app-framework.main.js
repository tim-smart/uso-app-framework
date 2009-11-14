/**
 * uso-app-framework
 *
 * @license    MIT style license. Full terms: http://github.com/Tim-Smart/uso-app-framework/raw/master/LICENSE
 * @copyright  2009 (c) Tim Smart
 */

#include "controller.class.js"
#include "model.class.js"
#include "view.class.js"
#include "mainController.class.js"
#include "loader.class.js"
#include "config.class.js"

#include "library.js"

var controller = new MainController(),
load = new Loader(),
model = {};

var config = new Config();
