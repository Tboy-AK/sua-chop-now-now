// @desc       Goes to the root Directory
// @routes      GET /api/v1/home
// @access      Public

exports.home = (req, res, next) => {
    res.send(`<h1> Welcome to our simple page,</h1><h4> I know this is really basic, but guy, I TRY!!!</h4>`);
};