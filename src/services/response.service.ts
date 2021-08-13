export default class {
  static success = function (message: string, data?: {}, code = 200) {
    const status = {
      code: code,
      message: message,
    };
    const response: {} = {
      assets: data,
      status: status,
    };
    return response;
  };
}
