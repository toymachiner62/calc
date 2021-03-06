// This is a file generated by the yeoman generator hapijs

/**
 * All the endpoints for anything related to wolfram
 *
 * @type {exports}
 */
var Joi = require('joi');
var wolframController = require('./wolfram-ctrl');

module.exports = function() {
  return [
    /*
    {
          method: 'POST',
          path: '/wolframs',
          config: {
            description: 'Creates a wolfram',
            handler: wolframController.create,
            validate: {
              payload: {
                // TODO: Add some validations
              }
            }
          }
        },*/
    
		
    {
      method: 'GET',
      path: '/wolfram/{equation}',
      config : {
        description: 'Calculates an equation',
        handler: wolframController.calculate,
				validate: {
					params: {
						equation: Joi.string().trim().required()
					}
				}
      }
    }
		
   /*
    {
         method: 'GET',
         path: '/wolframs/{id}',
         config : {
           description: 'Fetches a wolfram by id',
           handler: wolframController.findById,
           validate: {
             params: {
               id: Joi.number().integer().required()
             }
           }
         }
       },
   		
       {
         method: 'PUT',
         path: '/wolframs/{id}',
         config : {
           description: 'Updates a wolfram for a specific id',
           handler: wolframController.update,
           validate: {
             params: {
               id: Joi.number().integer().required()
             },
             payload: {
               // TODO: Add some validations
             }
           }
         }
       },
   		
       {
         method: 'DELETE',
         path: '/wolframs/{id}',
         config : {
           description: 'Remove a wolfram for a specific id',
           handler: wolframController.remove,
           validate: {
             params: {
               id: Joi.number().integer().required()
             }
           }
         }
       }*/
   
		
		/* Add new methods above */
  ]
}();
