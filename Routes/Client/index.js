"use strict";
const Route = require("@routerManager");

/*
  |--------------------------------------------------------------------------
  | Client Route File   
  |--------------------------------------------------------------------------
  | 
  */

Route.group("/client", () => {
  Route.get("/all", "ClientController@index");

  Route.get("/byId/:id", "ClientController@show");

  Route.post("/save", "ClientController@store");

  Route.patch("/update/:id", "ClientController@update");

  Route.delete("/delete/:id", "ClientController@destroy");
});

module.exports = Route.exec;
