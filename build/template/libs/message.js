"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageLib = void 0;
exports.messageLib = `
class MessageLoading {
  constructor(id) {
    this.closeHandler = null;
    this.canShowloading = true;
    this.delay = true;
    this.id = id;
  }

  showLoading(content) {
    if (!content) {
      content = '加载中';
    }
    this.closeHandler?.();
    setTimeout(() => {
      if (this.canShowloading) {
        this.closeHandler = Message.loading({
          content: content,
          id: this.id,
          duration: 0
        });
      }
    }, 300);
  }

  hideLoading(content) {
    this.canShowloading = false;
    if (content) {
      return this.info(content);
    }
    this.closeHandler?.();
    this.closeHandler = null;
  }

  success(content) {
    this.canShowloading = false;
    Message.success({
      content: content,
      id: this.id,
      duration: 1.25
    });
  }

  error(content) {
    this.canShowloading = false;
    Message.error({
      content: content,
      id: this.id,
      duration: 1.25
    });
  }

  info(content) {
    this.canShowloading = false;
    Message.error({
      content: content,
      duration: 1.25
    });
  }
}

const createMessageLoading = (id) => {
  if (!id) {
    id = Date.now().toString();
  }
  return new MessageLoading(id);
};

const convertMessageFunc = (fn) => {
  return (content, duration, onClose) => {
    fn({
      content,
      className: 'custom-antd-message-style',
      duration: duration ?? 2,
      onClose
    });
  };
};

const GlobalMessage = {
  success: convertMessageFunc(Message.success),
  error: convertMessageFunc(Message.error),
  info: convertMessageFunc(Message.info),
  warning: convertMessageFunc(Message.warning),
  loading: convertMessageFunc(Message.loading)
};
`;
