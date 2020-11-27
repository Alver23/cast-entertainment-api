'use strict';

const today = new Date();
const genders = [
  {
    id: 1,
    name: 'gender',
    description: 'gender options',
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 2,
    name: 'male',
    parent_id: 1,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 3,
    name: 'female',
    parent_id: 1,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 4,
    name: 'other',
    parent_id: 1,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  }
];
const motherTongue = [
  {
    id: 5,
    name: 'motherTongue',
    description: 'Mother Tongue',
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 6,
    name: 'spanish',
    description: 'Spanish',
    parent_id: 5,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 7,
    name: 'english',
    description: 'English',
    parent_id: 5,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
];
const skills = [
  {
    id: 8,
    name: 'skills',
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 9,
    name: 'salsa',
    description: 'Salsa',
    parent_id: 8,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 10,
    name: 'bachata',
    description: 'Bachata',
    parent_id: 8,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 11,
    name: 'hipHop',
    description: 'Hip Hop',
    parent_id: 8,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 12,
    name: 'merengue',
    description: 'Merengue',
    parent_id: 8,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
]
const relationship = [
  {
    id: 13,
    name: 'relationship',
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 14,
    name: 'mother',
    description: 'Mother',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 15,
    name: 'father',
    description: 'Father',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 16,
    name: 'wife',
    description: 'wife',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 17,
    name: 'husband',
    description: 'Husband',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 18,
    name: 'boyfriend',
    description: 'Boyfriend',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 19,
    name: 'girlfriend',
    description: 'Girlfriend',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 20,
    name: 'brother',
    description: 'Brother',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 21,
    name: 'sister',
    description: 'Sister',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 22,
    name: 'friend',
    description: 'Friend',
    parent_id: 13,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
];
const documentTypes = [
  {
    id: 23,
    name: 'Document Types',
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
  {
    id: 24,
    name: 'cedula',
    description: 'Cedula',
    parent_id: 23,
    ip_address: '127.0.0.1',
    created_at: today,
    updated_at: today
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('catalogs', [
      ...genders,
      ...motherTongue,
      ...skills,
      ...relationship,
      ...documentTypes,
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('catalogs', null, {});
  }
};
