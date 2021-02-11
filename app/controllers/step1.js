import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked dispoItems = [];
  @tracked includedItems_ = [];

  changeDispo(elements) {
    this.dispoItems = elements;
  }
  changeIncluded(elements) {
    this.includedItems_ = elements;
  }
}
