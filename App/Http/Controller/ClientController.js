"use strict";
const Response = require("../../Utils/HttpResponse");
const ClientValidation = require("@request/Client_request");

class ClientController {

  constructor({ ClientService }) {
    this._service = ClientService;
  }
  /**
   * Display a listing of the resource.
   * @endPoint api/client/all
   * @method GET
   * @param Request
   * @returns Response
   */
  index = async (req, res, next) => {
    try {
      return await this._service.getAllClients().then(result => {
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
   * @endPoint api/client/save
   * @method POST
   * @param  Request
   * @return Response
   */
  store = async (req, res, next) => {
    try {
      let validate = await ClientValidation.validate(req.body);
      if (validate.success) {
        return await this._service.saveAClient(req.body.url).then(result => {
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
   * @endPoint api/client/byId/{id}
   * @method GET
   * @param  Request
   * @return Response
   */
  show = async (req, res, next) => {
    try {
      return await this._service.getAClient(req.params.id).then(result => {
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
   * @endPoint api/client/update/{id}
   * @method PATCH
   * @param  Request
   * @return Response
   */
  update = async (req, res, next) => {
    try {
      let validate = await ClientValidation.validate(req.body);
      if (validate.success) {
        return await this._service.updateAClient(req.params.id,req.body.url).then(result => {
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
   * @endPoint api/client/delete/{id}
   * @method DELETE
   * @param Request
   * @return Response
   */
  destroy = async (req, res, next) => {
    try {
      return await this._service.removeAClient(req.params.id).then(result => {
        Response.OK(res, result);
      }).catch(err => {
        Response.NOTFOUND(res, err);
      })
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = ClientController;
