const { checkElements, checkElementsMap, mapArrayAdd } = require('../util');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const id = config.cufoon_id;
    const parent = config.cufoon_parent;
    const defaultContent = config.cufoon_default_content;
    const stateList = JSON.parse(config.cufoon_state_list);
    const namespace = config.cufoon_state_namespace;
    const globalStateList = JSON.parse(config.cufoon_state_global_list);
    const handlerList = JSON.parse(config.cufoon_state_handler_list);
    const effectList = JSON.parse(config.cufoon_state_effect_list);
    const requestList = JSON.parse(config.cufoon_state_request_list);
    var node = this;
    node.on('input', function (msg) {
      let parent1 = parent;
      if (parent !== '') {
        msg.payload = id;
      } else {
        parent1 = msg.payload;
      }
      msg = checkElements(msg);
      msg.cufoon.elements.set(id, {
        id: id,
        name: 'state',
        path: namespace,
        option: {
          state: stateList,
          list: globalStateList,
          handler: handlerList,
          effect: effectList,
          request: requestList
        },
        content: { text: defaultContent || '' }
      });
      msg = checkElementsMap(msg);
      mapArrayAdd(msg.cufoon.elementsMap, parent1, id);
      node.send(msg);
    });
  }

  RED.nodes.registerType('state', LowerCaseNode);
};
