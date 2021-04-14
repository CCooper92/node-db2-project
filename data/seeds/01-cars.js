// STRETCH
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate()//wipe out table then seed it with data
      .then(function () {
        // Inserts seed entries
        return knex('cars').insert([
          {vin:"5000", make: "jeep", model:"liberty", mileage:68000},
          {vin:"2000", make: "kia", model:"rio", mileage:68000},
          
        ]);
      });
  };