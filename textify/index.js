module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.ocrJson)) {
        var data = req.body.ocrJson.recognitionResult.lines;
        var lines = [];
        for ( var i=0; i < data.length;i++) {
            lines.push(data[i].text)
          }
        var output =  lines.join('\n');

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: output
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass OCR result JSON in the request body."
        };
    }
};