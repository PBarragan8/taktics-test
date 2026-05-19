module.exports = function (app) {
  app.models.Personnel.findOrCreate(
    { where: { email: 'jplaza@taktics.net' } },
    { name: 'Juanma', email: 'jplaza@taktics.net', password: '1212' }
  );
}