/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    env: 'prod', // 推荐云函数的 egg 运行环境变量修改为 prod
    rundir: '/tmp',
    logger: {
      dir: '/tmp',
    },
  };

  // 开发阶段放开
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 上传配置
  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: [ 'jpeg', '.xls', '.txt' ], // 扩展几种上传的文件格式
  };

  // cookie标志键，应更改为您自己的，并保持安全
  config.keys = appInfo.name + '_1593514233357_3744';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
