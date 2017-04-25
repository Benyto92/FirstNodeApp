(function (controllers) {

    var homeController = require("./homeController");
    var notesController = require("./notesCOntroller");

    controllers.init = function (app) {
        homeController.init(app);
        notesController.init(app);
    };

})(module.exports);