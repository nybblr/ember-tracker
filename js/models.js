// "instances" and "factories"
// attributes dict, instead of just plain props on the instance itself
// caching 'this'
// Static properties on the constructor
//      such as .objects instead of a global var
//      also, an object instead of an array
// Constructor methods: .delete, .retrieve
// delete keyword deletes object properties, not variables
// returning 'this'

// Challenge:
// Validation in/out:
//      Add validation on date in set
//      Check to make sure .get("date") returns a new Date()
//
// Filter:
//      Objects.keys to iterate over the Entry.objects
//      Then, .filter the resulting array using a callback passed in
//
// Sort:
//      Objects.keys to iterate over the Entry.objects
//      Then, .sort a *copy*

function Entry(overrides) {
    "use strict";

    this.attributes = {
        type: "",
        date: new Date(),
        location: "",
        witnesses: 1,
        name: "",
        id: Math.random().toString(36).slice(2)
    };

    // MUST. CACHE. 'this'
    var self = this;
    if (typeof overrides !== "undefined") {
        var keys = Object.keys(overrides);
        keys.forEach(function (key) {
            // Why do we cache 'this' as 'self'?
            // Because, inside the .forEach callback,
            // we are now inside another function context
            // which has a completely different 'this' reference

            self.attributes[key] = overrides[key];
        });
    }
}

// .get and .set
Entry.prototype.get = function (prop) {
    // Get a value from the 'attributes' dict
    return this.attributes[prop];
};

Entry.prototype.set = function (prop, val) {
    if (prop && val) {
        this.attributes[prop] = val;
    }
    return this;
};


// This is a "static" property, not part of the prototype
Entry.objects = {};

// CRUD operations
// Create and Update
Entry.prototype.save = function () {
    Entry.objects[this.get("id")] = this;
    return this;
};

// Delete
Entry.prototype.destroy = function () {
    // Delete the key/value pair identified by the id
    return delete Entry.objects[this.get("id")];
};

// Retrieve
Entry.get = function (id) {
    // Find by ID:
    return Entry.objects[id];
};


// Storing and Loading
Entry.STORAGE_KEY = "creature-tracker/entries";

Entry.store = function () {
    var howMany = Object.keys(Entry.objects).length;
    if (howMany > 0) {
        localStorage.setItem(Entry.STORAGE_KEY, JSON.stringify(Entry.objects));
        console.log("Stored " + howMany + " entries")
    } else {
        console.log("No entries to store");
    }
    return this;
};

Entry.load = function () {
    var storedEntries = localStorage.getItem(Entry.STORAGE_KEY);
    if (storedEntries !== null) {
        // Entry.objects = JSON.parse(storedEntries);
        var rawEntries = JSON.parse(storedEntries);
        Object.keys(rawEntries).forEach(function (key) {
            Entry.objects[key] = new Entry(rawEntries[key].attributes);
        });

        console.log("Loaded " + Object.keys(Entry.objects).length + " entries");
    } else {
        console.log("No objects in localStorage");
    }
    return this;
};

$(document).ready(function () {
    Entry.load();
});