const express= require('express')
const router = express.Router()
const functions = require('./controller/index')
let routes = (app)=>
{
    router.post('/savemovie', functions.savemovie)
    router.post('/release_on_2023', functions.release)
    router.post('/runtime', functions.runtimedata)
    router.post('/genre', functions.genre)
    router.post('/director', functions.director)
    router.post('/releasecountry', functions.releasecountry)
    router.post('/rating', functions.rating)
    router.post('/imdb', functions.votes)
    router.post('/imdbrating', functions.imdbrating)
    router.post('/tomatoesviewer', functions.tomoviewer)
    router.post('/awardwin', functions.awardwin)
    router.post('/nomination', functions.nonimation)
    router.post('/moviecast', functions.cast)
    router.post('/released', functions.releasedate)
    router.post('/movietitle', functions.moviename)
    router.post('/rattingbw', functions.ratingbww)
    router.post('/movielt', functions.movielt)
    router.post('/plot1', functions.plot1)
    router.post('/plot2', functions.plot2)

    app.use('/api', router)
}


module.exports= routes