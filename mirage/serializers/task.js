import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['schema'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let schema = json.schema.id;
    json.schema = schema;

    return json;
  }
});
