'use strict';

/**
 * notes-upload service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notes-upload.notes-upload');
