
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'deimusdark',
  applicationName: 'reto2021',
  appUid: 'GH15HTJkDX8byz6CXk',
  orgUid: '1563a876-b7af-49b6-85ce-ba95846cff71',
  deploymentUid: '8d6e01a4-d8ec-4176-b5f5-c425817075fe',
  serviceName: 'reto2021',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '5.5.2',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'reto2021-dev-addPersona', timeout: 6 };

try {
  const userHandler = require('./src/Persona/addPersona.js');
  module.exports.handler = serverlessSDK.handler(userHandler.addPersonaPost, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}