
const profiles = [ {
  name: 'Imen' },
  {
  name: 'Aymen'
  }, {
  name: 'Feres' },
  {
  name: 'Nadia'
  }, {
  name: 'Mohamed' }
  ];
  exports.seed = function (knex) { return knex('profiles').del() .then(() => {
  return knex('profiles').insert(profiles)
  }) };

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };