const profiles = [
  {
    name: "Imen",
    lastname: "imena",
  },
  {
    name: "Aymen",
    lastname: "aymouna",
  },
  {
    name: "Feres",
    lastname: "farrousa",
  },
  {
    name: "Nadia",
    lastname: "akecha",
  },
  {
    name: "Mohamed",
    lastname: "hamouda",
  },
];

exports.seed = function (knex) {
  return knex("profiles")
    .del()
    .then(() => {
      return knex("profiles").insert(profiles);
    });
};
