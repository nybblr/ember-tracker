window.App = Ember.Application.create();

App.Router.map(function () {
  this.resource('sighting', { path: 'sighting/:sighting_id' });
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return App.Sighting.FIXTURES;
  }
});

App.SightingRoute = Ember.Route.extend({
  model: function (params) {
    return App.Sighting.FIXTURES.findProperty('id',
      parseInt(params.sighting_id, 10));
  }
});

App.Sighting = Ember.Object.extend();
