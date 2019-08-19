const Util = require('./util.js');

exports.handler = async (event) => {
    const myBody = JSON.parse(event.body);

    // Clovaから飛んでくるデータを取得
    const message = myBody.response.outputSpeech.values.value;

    const response = {
        statusCode: 200,
        body: {"result":"completed!"},
    };

    if (message != undefined) {
        // Amazon Connect送信
        await Util.callMessageAction(message);

    }
    return response;
};
