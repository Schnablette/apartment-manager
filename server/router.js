module.exports = function(app) {
  app.post('/auth/signin', requireSignin, Authentication.signin)
  app.post('/auth/signup', Authentication.signup)
  app.get('/auth/current_user', requireAuth, Authentication.currentUser)
  app.post('/api/watchlist', requireAuth, WatchList.addMovieToList)
}
