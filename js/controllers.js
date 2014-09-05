
var ListController = {
    view: ListView,
    start: function () {
        var $el = $("section.container");
        var self = this;
        $el.load(self.view.template, function () {
            var $table = $el.find(".table");
            var $tbody = $("<tbody>");

            Object.keys(Entry.objects).forEach(function (key) {
                self.view.init(Entry.get(key).attributes);
                self.view.render($tbody);
            });
            $table.append($tbody);
        });
    }
};

var DetailController = {
    view: DetailView,
    start: function (id) {
        var self = this;
        var $el = $("section.container");
        $el.load(self.view.template, function () {
            var creature = Entry.get(id);
            var $form = $el.find(".detail-form");
            self.view.init(creature.attributes);
            self.view.render($form);
        });
    }
};
