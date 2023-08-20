const service = require('./service')
const savemovie = async(req,res)=>
{
    const saveinput = await service.savedata(req.body)
    res.send ("Added successfully")
}
//movie released on 2023
const release = async(req,res)=>
{
    const year2000 = await service.movierelease(req.body)
    res.send(year2000)
}
//runtime greater than 120runtime
const runtimedata = async(req,res)=>
{
    const duration = await service.runtime(req.body)
    res.send(duration)
}
//movie with genre:fantasy
const genre = async(req,res)=>
{
    const genre = await service.genre(req.body)
    res.send(genre)
}
// 4. Retrieve all movies directed by "Michael Anderson" and include complete information for each movie.
const director = async(req,res)=>
{
    const getdirector = await service.moviedir(req.body)
    res.send(getdirector)
}
// movies released in the USA 
const releasecountry = async(req,res)=>
{
    const country = await service.moverelease(req.body)
    res.send(country)
}
//all movies rating
const rating = async(req,res)=>
{
    const movrating = await service.unrated(req.body)
    res.send(movrating)
}
// movies with more than 1000 votes on IMDb
const votes = async(req,res)=>
{
    const imdbvotes = await service.IMBBvotes(req.body)
    res.send(imdbvotes)
}
// IMDb rating higher than 7
const imdbrating = async(req,res)=>
{
    const rating = await service.rating(req.body)
    res.send(rating)
}
// viewer rating higher than 4 on Tomatoes
const tomoviewer = async(req,res)=>
{
    const view = await service.tomatoesviewer(req.body)
    res.send(view)
}
// movies that have received an award
const awardwin = async(req,res)=>
{
    const win = await service.award(req.body)
    res.send(win)
}
//movies with at least one nomination
const nonimation = async(req,res)=>
{
    const onenomination = await service.nomination(req.body)
    res.send(onenomination)
}
////movies with cast including 
const cast = async(req,res)=>
{
    const cast = await service.moviecast(req.body)
    res.send(cast)
}
//movies released on .
const releasedate = async(req,res)=>
{
    const year = await service.released(req.body)
    res.send(year)
}
//movies with "scene" in the title
const moviename = async(req,res)=>
{
    const title = await service.movietitle(req.body)
    res.send(title)
}
//movies with a viewer rating between 3 and 4 on Tomatoes.
const ratingbww = async(req,res)=>
{
    const view = await service.ratingbw(req.body)
    res.send(view)
}
//movies released before the year 2011
const movielt = async(req,res)=>
{
    const movie = await  service.moviebefore(req.body)
    res.send(movie)
}
//movies with "darkness" in the fullplot
const plot1 = async(req,res)=>
{
    const movie = await service.fullplot1(req.body)
    res.send(movie)
}
//// movies with "family" mentioned in the plot.
const plot2 = async(req,res)=>
{
    const movie = await service.fullplot2(req.body)
    res.send(movie)
}
module.exports=
{
    savemovie,
    release,
    runtimedata,
    genre,
    director,
    releasecountry,
    rating,
    votes,
    imdbrating,tomoviewer, awardwin,
    nonimation, cast, releasedate,
    moviename, ratingbww, movielt,
    plot1, plot2
}