'use strict';

/**
 * alacarte service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alacarte.alacarte');
