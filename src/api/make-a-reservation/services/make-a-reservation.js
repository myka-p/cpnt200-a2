'use strict';

/**
 * make-a-reservation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::make-a-reservation.make-a-reservation');
