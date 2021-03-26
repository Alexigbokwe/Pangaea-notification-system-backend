"use strict";
const Route = require("@routerManager");

/*
  |--------------------------------------------------------------------------
  | Topic Route File   
  |--------------------------------------------------------------------------
  | 
  */

Route.group("/topic", () => {
  Route.get("/all", "TopicsController@index");

  Route.get("/byId/:id", "TopicsController@show");

  Route.post("/save", "TopicsController@store");

  Route.patch("/update/:id", "TopicsController@update");

  Route.delete("/delete/:id", "TopicsController@destroy");
});

module.exports = Route.exec;
