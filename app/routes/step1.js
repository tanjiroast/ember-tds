import Route from '@ember/routing/route';

export default class Step1Route extends Route {
  model() {}
  setupController(controller, model) {
    controller.dispoItems = model;
  }
}
