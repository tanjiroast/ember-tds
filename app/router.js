import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('board');
  this.route('logout');
  this.route('products', function() {
    this.route('addproduct');
    this.route('delete');
  });
  this.route('section', function() {
    this.route('add');
    this.route('delete', { path: 'delete/:section_id' });
    this.route('modif');
    this.route('products', function() {
      this.route('edit');
    });
    this.route('edit');
  });
});
