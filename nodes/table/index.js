const { checkElements, checkElementsMap, mapArrayAdd } = require('../util');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const id = config.cufoon_id;
    const parent = config.cufoon_parent;
    const defaultContent = config.cufoon_default_content;

    const columns = JSON.parse(config.cufoon_columns);
    const dataName = config.cufoon_data;
    const loadingName = config.cufoon_loading;
    const isStripe = config.cufoon_stripe;
    const paginationProps = JSON.parse(config.cufoon_pagination);
    const actions = JSON.parse(config.cufoon_actions);

    var node = this;
    node.on('input', function (msg) {
      let parent1 = parent;
      if (parent !== '') {
        msg.payload = id;
      } else {
        parent1 = msg.payload;
      }
      msg = checkElements(msg);
      let columns1 = '';
      columns.map((item) => {
        columns1 += `{title:'${item.title}',dataIndex:'${item.index}'},`;
      });

      const pagination1 = {
        showTotal: 'true',
        sizeCanChange: 'true',
        sizeOptions: '[25,50,100,200]',
        showJumper: 'true',
        ...paginationProps
      };
      if (pagination1.sizeOptions) {
        pagination1.sizeOptions = `[${pagination1.sizeOptions.join(',')}]`;
      }
      msg.cufoon.elements.set(id, {
        id: id,
        name: 'table',
        option: {
          columns: columns1,
          columnsAction: actions,
          data: dataName,
          loading: loadingName,
          stripe: isStripe,
          pagination: pagination1
        },
        content: { text: defaultContent || '' }
      });
      msg = checkElementsMap(msg);
      mapArrayAdd(msg.cufoon.elementsMap, parent1, id);
      node.send(msg);
    });
  }

  RED.nodes.registerType('table', LowerCaseNode);
};
