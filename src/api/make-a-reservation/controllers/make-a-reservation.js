'use strict';

/**
 * make-a-reservation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::make-a-reservation.make-a-reservation');
