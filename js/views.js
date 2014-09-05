var ListView = {
    template: "templates/list.html",
    modelObject: null,
    init: function (newModelObject) {
        this.modelObject = newModelObject;
    },
    render: function ($domElement) {
        var source = $("#entry-listing-template").html();
        var template = Handlebars.compile(source);
        $domElement.append(template(this.modelObject));
        $domElement.on("click", "td", function (evt) {
            evt.preventDefault();
            window.location.hash = "#detail/" + $(this).parent("tr").attr("id");
        });
    }
};

var DetailView = {
    template: "templates/details.html",
    modelObject: null,
    init: function (newModelObject) {
        this.modelObject = newModelObject;
    },
    render: function ($domElement) {
        var self = this;
        var source = $("#entry-details-template").html();
        var template = Handlebars.compile(source);
        $domElement.append(template(this.modelObject));

        $domElement.find("[name='type']").val(this.modelObject.type);
        $domElement.find("[name='location']").val(this.modelObject.location);
        $domElement.find("[name='date']").val(this.modelObject.date);
        $domElement.find("[name='witnesses']").val(this.modelObject.witnesses);
        $domElement.find("[name='name']").val(this.modelObject.name);
    }
};
