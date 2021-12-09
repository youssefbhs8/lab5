const profiles = [ {
  name: 'Imen',
  age: '37'
 },
  {
  name: 'Aymen',
  age: '22'
  }, {
  name: 'Feres',
  age: '29'
},
  {
  name: 'Nadia',
  age: '16'
  }, {
  name: 'Mohamed',
  age: '18'
 }
  ];

  exports.seed = function (knex) { 
  return knex('profiles').del() .then(() => {
  return knex('profiles').insert(profiles)
  }) };