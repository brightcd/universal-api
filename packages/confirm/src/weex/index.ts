import { Options } from '../types';

// eslint-disable-next-line
declare const __weex_require__: any;

const confirm = (options: Options): Promise<boolean> => {
  return new Promise((resolve): void => {
    const { content = '', confirmButtonText, cancelButtonText } = options;
    const modal = __weex_require__('@weex-module/modal');
    modal.confirm({
      message: content,
      okTitle: confirmButtonText,
      cancelTitle: cancelButtonText,
    }, (confirm: string): void => {
      confirm === confirmButtonText ? resolve(true) : resolve(false);
    });
  });
};

export default confirm;
