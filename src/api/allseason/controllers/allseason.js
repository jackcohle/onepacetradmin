'use strict';

/**
 *  allseason controller
 */



const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::allseason.allseason');

/* module.exports = createCoreController('api::allseason.allseason', ({strapi}) => ({
    async findOne(ctx) {
        const {id} = ctx.params;

        const entity = await strapi.db.query('api::allseason.allseason').findOne({
            where: {slug: id},
            populate: {
                image: {
                    populate: {
                        fields: ['*'],
                    }
                },
                allepisodes: {
                    populate: {
                        image: {
                            populate: {
                                fields: ['*'],
                            }
                        },
                        allseason: {
                            populate: {
                                fields: ['*'],
                            }
                        },
                        alltranslators: {
                            populate: {
                                fields: ['*'],
                            }
                        }
                    }
                }
            }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
})); */