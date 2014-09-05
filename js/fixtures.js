var fixtures = [
  {
    "id": 1,
    "type": "unicorn",
    "date": "2012-04-01",
    "location": "Candy Mountain",
    "witnesses": 5,
    "name": "charlie"
  },
  {
    "id": 2,
    "type": "sasquatch",
    "date": "2013-02-25",
    "location": "Atlanta",
    "witnesses": 3,
    "name": ""
  },
  {
    "id": 3,
    "type": "nerd",
    "date": "2013-04-30",
    "location": "Banning Mills",
    "witnesses": 11,
    "name": "chris"
  }
];

App.Sighting.FIXTURES = fixtures.map(function (entry) {
  return App.Sighting.create(entry);
});
