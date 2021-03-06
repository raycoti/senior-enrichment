'use strict';
var Sequelize = require('sequelize')

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

const Students = require('./students')
const Campuses = require('./campuses')

Campuses.hasMany(Students)
Students.belongsTo(Campuses)

// Students.find({ where: { id: 1 } })
//   .on('success', function (student) {
//     // Check if record exists in db
//     if (student) {
//       student.updateAttributes({
//         campusId: 'a very different title now'
//       })
//       .success(function () {})
//     }
//   })


for(var i = 1; i < 18; i++){
  Students.update({
    campusId: Math.floor(Math.random() * 4) + 1 ,
  }, {
    where: {
        id: i
    }
  })
}


module.exports = {Students, Campuses}
