module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('pages/index');
  });

  app.get('/portfolio', function (req, res) {
    res.render('pages/portfolio');
  });

  app.get('/contact', function (req, res) {
    res.render('pages/contact');
  });

  app.get('/gottago', function (req, res) {
    res.render('pages/gottago2');
  });

  app.get('/nyt', function (req, res) {
    res.render('pages/nyt');
  });

  app.get('/fastco', function (req, res) {
    res.render('pages/fastco');
  });

  app.get('/work', function (req, res) {
    res.render('pages/experience');
  });

  app.get('/games', function (req, res) {
    res.render('pages/games');
  });

  app.get('/wip', function (req, res) {
    res.render('pages/wip');
  });
};
