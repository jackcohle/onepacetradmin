'use strict';

/**
 *  allepisode controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::allepisode.allepisode', ({strapi}) => ({
    async findOne(ctx) {
        const {id} = ctx.params;

        const entity = await strapi.db.query('api::allepisode.allepisode').findOne({
            where: {slug: id},
            populate: {
                image: {
                    populate: {
                        fields: ['*'],
                    }
                },
                allseason: {
                    populate: {
                        fields: ['*'],
                        allepisodes: {
                            populate: {
                                fields: ['*'],
                            }
                        }
                    }
                },
                alltranslators: {
                    populate: {
                        fields: ['*'],
                    }
                }
            }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));

