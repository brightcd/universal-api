import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import byteDanceModule from './bytedance-microapp/index';

import { INavigate } from './types';

function dutyChain(...fns) {
  for (let i = 0; i < fns.length; i++) {
    const result = fns[i]();
    if (result) {
      return result;
    }
  }
}

function handleWeb() {
  if (isWeb) {
    return webModule;
  }
  return null;
}

function handleWeex() {
  if (isWeex) {
    return weexModule;
  }
  return null;
}

function handleMiniApp() {
  if (isMiniApp) {
    return miniAppModule;
  }
  return null;
}

function handleWeChat() {
  if (isWeChatMiniProgram) {
    return weChatModule;
  }
  return null;
}

function handleByteDance() {
  if (isByteDanceMicroApp) {
    return byteDanceModule;
  }
  return null;
}

// Default module is web
function handleDefault() {
  return webModule;
}

const Navigate: INavigate = dutyChain(
  handleWeb,
  handleWeex,
  handleMiniApp,
  handleWeChat,
  handleByteDance,
  handleDefault
);

// Web should be first
export default Navigate;
