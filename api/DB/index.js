// module.exports = async function (context, req) {
//     context.res.json({
//         text: "Hello from the API"
//     });
// };

module.exports = async function (context, req) {
    context.res.json(context.bindings.documents);
}