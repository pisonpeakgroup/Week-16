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
    
  }
}

export default Routes;
