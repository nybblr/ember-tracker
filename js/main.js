$("#save").on("click", function (evt) {
    evt.preventDefault();
    Entry.store();
});
$("#load").on("click", function (evt) {
    evt.preventDefault();
    Entry.load();
});
Router.start();