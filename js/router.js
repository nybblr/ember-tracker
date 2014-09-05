
var Router = (function () {

    var controllersForRoutes = {
        "#list": ListController,
        "#detail": DetailController,
    };

    var defaultRoute = Object.keys(controllersForRoutes)[0];

    var loadRoute = function (routeName, args) {
        var controller = controllersForRoutes[routeName] || controllersForRoutes[defaultRoute];
        console.log("loading for route " + routeName);
        controller.start(args);
    };

    var parseRoute = function (rawRoute) {
        return rawRoute.split("/");
    };

    var startRouting = function () {

        window.location.hash = window.location.hash || defaultRoute;
        loadRoute.apply(null, parseRoute(window.location.hash));

        $(window).on("hashchange", function () {
            var currentHash = window.location.hash || defaultRoute;
            console.log("change! " + currentHash);
            loadRoute.apply(null, parseRoute(currentHash));
        });
    };

    return {
        start: startRouting
    }
})();