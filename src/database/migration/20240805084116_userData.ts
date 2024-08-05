import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user", (table) => {
    table.uuid("user_id");
    table.string("email", 120).notNullable();
    table.text("password").notNullable();
    table.text("token_api").nullable();
    table.dateTime("last_login").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("user");
}
