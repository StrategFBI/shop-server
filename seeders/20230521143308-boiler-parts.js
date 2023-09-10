const {faker} = require('@faker-js/faker')
'use strict';

const bollerManufacturers = [
  'Ariston',
  'Chaffoteax&Mary',
  'Baxi',
  'Bongioanni',
  'Saunier Duval',
  'Buderus',
  'Strategist',
  'Henry',
  'Northwest'
]

const partsManufacturers = [
  'Azure',
  'Gloves',
  'Cambridgeshire',
  'Salmon',
  'Montana',
  'Sensor',
  'Lesly',
  'Radian',
  'Gasoline',
  'Croatia'
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BoilerParts', [...Array(100)].map(()=> ({
      boiler_manufacturer: bollerManufacturers[Math.floor(Math.random()*bollerManufacturers.length)],
      parts_manufacturer: partsManufacturers[Math.floor(Math.random()*partsManufacturers.length)],
      price: faker.string.numeric(4),
      name: faker.lorem.sentence(2),
      description: faker.lorem.sentence(10),
      images: JSON.stringify([...Array(7)].map(()=>`${faker.image.url()}?random=${faker.string.numeric(30)}`)),
      vendor_code: faker.internet.password(),
      in_stock: faker.string.numeric(1),
      bestseller: faker.datatype.boolean(),
      new: faker.datatype.boolean(),
      popularity: faker.string.numeric(3),
      compatibility: faker.lorem.sentence(7),
      createdAt: new Date(),
      updatedAt: new Date()
    })));
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  }
};
