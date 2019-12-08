
const { WebhookClient } = require('dialogflow-fulfillment');
// const torch = require("torch-js");

module.exports = (request, response) => {
    const agent = new WebhookClient({request: request, response: response});

    let action = request.body.queryResult.queryText;
    let responseJson = {};

    //commented lines are in progress

    // var test_model_path = "test/test_model.pt";

    // var script_module = new torch.ScriptModule(test_model_path);

    // var a = torch.rand(1, 5);
    // console.log(a.toObject());
    // var b = torch.rand([1, 5]);
    // console.log(b.toObject());

    // var c = script_module.forward(a, b);
    // console.log(c.toObject());

    // var d = torch.tensor([[0.1, 0.2, 0.3, 0.4, 0.5]]);
    // console.log(d.toObject());

    // var e = script_module.forward(c, d);
    // console.log(e.toObject());

    switch (action){
        case "analyze":
            let report = "Sentiment analysis result: ";
            // add the results
            responseJson.fulfillmentMessages = [
                {
                    "text": {
                        "text": [
                            report
                        ]
                    },
                    "platform": "FACEBOOK"
                },
            ];
            break;
        case "rewrite":
            let newSentence = "Rewritten sentence: ";
            // add the new sentence
            responseJson.fulfillmentMessages = [
                {
                    "text": {
                        "text": [
                            newSentence
                        ]
                    },
                    "platform": "FACEBOOK"
                },
            ];
            break;
        default:
            responseJson.fulfillmentMessages = [
                {
                    "text": {
                        "text": [
                            "Sorry, I don't understand what you are saying."
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "card": {
                        "title": "Choose what you want to do",
                        "buttons": [
                            {
                            "text": "analyze",
                            "postback": "analyze"
                            },
                            {
                            "text": "rewrite sentence",
                            "postback": "rewrite"
                            },
                            {
                            "text": "random chat",
                            "postback": "chat"
                            }
                        ],
                        },
                        "platform": "FACEBOOK"
                }
            ];

    }

    response.json(responseJson);

};