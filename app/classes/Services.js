import {computed} from "@ember/object";
export default class Services {
  services = [];
  test=0;

  constructor(data) {
    this.services = data;
  }
  @computed('services.@each.active')

  get countActive(){
    return this.services.filterBy('active',true).length;

  }


  get sumActive(){
    var total = 0;
    this.services.filterBy('active',true).forEach(function(service) {
      total += service.price;
    });
    return total;
  }
}
