const ioc = require("expressweb-ioc");

class AppServiceProvider {
  /**
   * Register application services.
   */
  register() {
    return {
      TopicService: ioc.asClass("App/Service/TopicService", "SINGLETON"),
      ClientService: ioc.asClass("App/Service/ClientService", "SINGLETON"),
      SubscriptionService: ioc.asClass("App/Service/SubscriptionService", "SINGLETON"),
    };
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  boot() {
    //
  }
}

module.exports = AppServiceProvider;
