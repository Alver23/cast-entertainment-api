'use strict';

const today = new Date();
const commonValues = {
  ip_address: '127.0.0.1',
  created_at: today,
  updated_at: today
}
const genders = [
  {
    id: 1,
    name: 'gender',
    description: 'gender options',
    orden: 1,
    ...commonValues,
  },
  {
    id: 2,
    name: 'male',
    description: 'Male',
    parent_id: 1,
    orden: 1,
    ...commonValues,
  },
  {
    id: 3,
    name: 'female',
    description: 'Female',
    parent_id: 1,
    orden: 2,
    ...commonValues,
  },
  {
    id: 4,
    name: 'other',
    description: 'Other',
    parent_id: 1,
    orden: 3,
    ...commonValues,
  }
];
const motherTongue = [
  {
    id: 5,
    name: 'motherTongue',
    description: 'Mother Tongue',
    orden: 2,
    ...commonValues,
  },
  {
    id: 6,
    name: 'spanish',
    description: 'Spanish',
    parent_id: 5,
    orden: 1,
    ...commonValues,
  },
  {
    id: 7,
    name: 'english',
    description: 'English',
    parent_id: 5,
    orden: 2,
    ...commonValues,
  },
];
const skills = [
  {
    id: 8,
    name: 'skills',
    orden: 3,
    ...commonValues,
  },
  {
    id: 9,
    name: 'salsa',
    description: 'Salsa',
    orden: 1,
    parent_id: 8,
    ...commonValues,
  },
  {
    id: 10,
    name: 'bachata',
    description: 'Bachata',
    orden: 2,
    parent_id: 8,
    ...commonValues,
  },
  {
    id: 11,
    name: 'hipHop',
    description: 'Hip Hop',
    orden: 3,
    parent_id: 8,
    ...commonValues,
  },
  {
    id: 12,
    name: 'merengue',
    description: 'Merengue',
    orden: 4,
    parent_id: 8,
    ...commonValues,
  },
]
const relationship = [
  {
    id: 13,
    name: 'relationship',
    orden: 4,
    ...commonValues,
  },
  {
    id: 14,
    name: 'mother',
    description: 'Mother',
    orden: 1,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 15,
    name: 'father',
    description: 'Father',
    orden: 2,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 16,
    name: 'wife',
    description: 'Wife',
    orden: 3,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 17,
    name: 'husband',
    description: 'Husband',
    orden: 4,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 18,
    name: 'boyfriend',
    description: 'Boyfriend',
    orden: 5,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 19,
    name: 'girlfriend',
    description: 'Girlfriend',
    orden: 6,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 20,
    name: 'brother',
    description: 'Brother',
    orden: 7,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 21,
    name: 'sister',
    description: 'Sister',
    orden: 8,
    parent_id: 13,
    ...commonValues,
  },
  {
    id: 22,
    name: 'friend',
    description: 'Friend',
    orden: 9,
    parent_id: 13,
    ...commonValues,
  },
];
const documentTypes = [
  {
    id: 23,
    name: 'Document Types',
    orden: 5,
    ...commonValues,
  },
  {
    id: 24,
    name: 'cedula',
    orden: 1,
    description: 'Cedula',
    parent_id: 23,
    ...commonValues,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('catalog', [
      ...genders,
      ...motherTongue,
      ...skills,
      ...relationship,
      ...documentTypes,
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('catalog', null, {});
  }
};
