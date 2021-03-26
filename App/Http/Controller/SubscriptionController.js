"use strict";
const Response = require("../../Utils/HttpResponse");
const SubscribeValidation = require("@request/Subscribe_request");

class SubscriptionController {
  constructor({ SubscriptionService }) {
    this._service = SubscriptionService;
  }

   /**
   * Store a newly created resource in storage.
   * @endPoint api/subscription/{topic}
   * @method POST
   * @param  Request
   * @return Response
   */
     store = async (req, res, next) => {
      try {
        let validate = await SubscribeValidation.validate(req.body);
        if (validate.success) {
          return await this._service.subscribeUser(req.params.topic,req.body.url).then(result => {
            Response.OK(res, result);
          }).catch(err => {
            Response.NOTFOUND(res, err);
          })
        } else {
          Response.BAD_REQUEST(res, validate);
        }
      } catch (error) {
        return next(error);
      }
    };
    
}

module.exports = SubscriptionController;
