
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      /*
        CREATE TABLE recipes (
        id          INTEGER      PRIMARY KEY AUTOINCREMENT,
        recipe_name STRING (255) NOT NULL
        );
      */
      tbl.increments();

      tbl.string("recipe_name", 255).notNullable();
  })
  .createTable("instructions", tbl => {
    tbl.increments();

    // create a foreign key to recipe_id
    tbl.integer("recipe")
      .unsigned()
      .notNullable()
      .references("recipes.id")
      // .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
  })
  .createTable("ingredients", tbl => {
    tbl.increments();

    tbl.string("ingredient_name", 255).notNullable().unique();
  })
  .createTable("recipe_ingredients", tbl => {
    tbl.increments();
    // TODO create a foreign key to recipe_id
    tbl.integer("recipe")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");

    // TODO create a foreign key to ingredient_id
    tbl.integer("ingredient")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");

    tbl.float("quantity");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes");
};
