'use strict';

/**
 * make-a-reservation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::make-a-reservation.make-a-reservation');
