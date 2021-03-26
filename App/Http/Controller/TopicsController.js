"use strict";
const Response = require("../../Utils/HttpResponse");
const TopicValidation = require("@request/Topic_request");

class TopicsController {

  constructor({ TopicService }) {
    this._service = TopicService;
  }
  /**
   * Display a listing of the resource.
   * @endPoint api/topic/all
   * @method GET
   * @param Request
   * @returns Response
   */
  index = async (req, res, next) => {
    try {
      return await this._service.getAllTopics().then(result => {
        Response.OK(res, result);
      }).catch(err => {
        Response.NOTFOUND(res, err);
      })
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Store a newly created resource in storage.
   * @endPoint api/topic/save
   * @method POST
   * @param  Request
   * @return Response
   */
  store = async (req, res, next) => {
    try {
      let validate = await TopicValidation.validate(req.body);
      if (validate.success) {
        return await this._service.saveATopic(req.body.name).then(result => {
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

  /**
   * Display the specified resource.
   * @endPoint api/topic/byId/{id}
   * @method GET
   * @param  Request
   * @return Response
   */
  show = async (req, res, next) => {
    try {
      return await this._service.getATopic(req.params.id).then(result => {
        Response.OK(res, result);
      }).catch(err => {
        Response.NOTFOUND(res, err);
      })
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Update the specified resource in storage.
   * @endPoint api/topic/update/{id}
   * @method PATCH
   * @param  Request
   * @return Response
   */
  update = async (req, res, next) => {
    try {
      let validate = await TopicValidation.validate(req.body);
      if (validate.success) {
        return await this._service.updateATopic(req.params.id,req.body.name).then(result => {
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

  /**
   * Remove the specified resource from storage.
   * @endPoint api/topic/delete/{id}
   * @method DELETE
   * @param Request
   * @return Response
   */
  destroy = async (req, res, next) => {
    try {
      return await this._service.removeATopic(req.params.id).then(result => {
        Response.OK(res, result);
      }).catch(err => {
        Response.NOTFOUND(res, err);
      })
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = TopicsController;
