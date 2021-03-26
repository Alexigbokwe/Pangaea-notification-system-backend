"use strict";

class MessageController {
  /**
   * Publish message to topic
   * @endPoint api/topic/{topic}
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

module.exports = MessageController;
