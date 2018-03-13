import authRoutes from './AuthRoutes';


/**
 * Holds all routing logic
 */
class Routes {
  /**
   * Route handling method
   * @param {Object} router
   */
  static route(router) {
    authRoutes.route(router);
    categoryRoutes.route(router);
    topicRoutes.route(router);
    userRoutes.route(router);
  }
}

export default Routes;
