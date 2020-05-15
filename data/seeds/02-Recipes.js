
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          "id": 1,
          "recipe_name": "White Chocolate Chip Macadamea Nut Cookies"
        },
        {
          "id": 2,
          "recipe_name": "White Chocolate Coconut Cookies"
        },
        {
          "id": 3,
          "recipe_name": "Butterscotch Chip Cookies"
        },
        {
          "id": 4,
          "recipe_name": "Birthday Cake Confetti Cookies"
        },
        {
          "id": 5,
          "recipe_name": "Peanut Butter Chocolate Kiss Cookies"
        }
    ]);
    });
};
