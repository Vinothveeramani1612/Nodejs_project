const mongoose= require('mongoose')
const movieschema = new mongoose.Schema(
    {
        plot: String,
        genres: String,
        runtime: Number,
        cast: String,
        poster: String,
        title: String,
        fullplot: String,
        languages: String,
        released: Date,
        directors: String,
        rated: String,
        awards: {
            wins: Number,
            nominations: Number,
            text: String
        },
        lastupdated: Date,
        year: Number,
        imdb: {
            rating: Number,
            votes: Number,
            id: Number
        },
        countries: String,
        type: String,
        tomatoes: {
            viewer: {
                rating: Number,
                numReviews: Number,
                meter: Number
            },
            fresh: Number,
            critic: {
                rating: Number,
                numReviews: Number,
                meter: Number
            },
            rotten: Number,
            lastUpdated: Date
        }
    }   
)

const moviemodel = mongoose.model('movie' , movieschema)
const savedata = async(data)=>
{
    const details = new moviemodel(data)
    const savedetails = await details.save()
    return savedetails
}
//movie released in 2023
const movierelease = async(data)=>
{
    const findyear = await moviemodel.find({ year:data.year})
    return findyear
}
//movie runtime greater than 120minutes
const runtime = async(data)=>
{
    const runtime = await moviemodel.find({ runtime: { $gt: 120 } })
    return runtime
}
//movie with genre:fantasy
const genre = async(data)=>
{
    const moviegenre = await moviemodel.find({ genres:data.genres })
    return moviegenre
}
// 4. Retrieve all movies directed by "Michael Anderson" and include complete information for each movie.
const moviedir = async(data)=>
{
    const finddirector = await moviemodel.find({ directors:data.directors })
    return finddirector
}
// movies released in the USA 
const moverelease = async(data)=>
{
    const release = await moviemodel.find({countries:data.countries})
    return release
}
//all  movies rating 
const unrated = async(data)=>
{
    const rating = await moviemodel.find({rated:data.rated})
    return rating
}
//movies with more than 1000 votes on IMDb.
const IMBBvotes = async(data)=>
{
    const votes = await moviemodel.find({"imdb.votes":{$gt:1000}})
    return votes
}
// IMDb rating higher than 7
const rating = async(data)=>
{
    const rating = await moviemodel.find({ "imdb.rating": { $gt: 7 } })
    return rating
}
// viewer rating higher than 4 on Tomatoes
const tomatoesviewer = async(data)=>
{
    const viewer = await moviemodel.find({ "tomatoes.viewer.rating": { $gt: 4 } })
    return viewer
}
//movies that have received an award
const award = async(data)=>
{
    const award = await moviemodel.find({ "awards.wins": { $gt: 0 } })
    return award
}
//movies with at least one nomination.
const nomination= async(data)=>
{
    const nomini = await moviemodel.find({ "awards.nominations": { $gt: 0 } }, "title languages released directors writers awards year genres runtime cast countries")
    return nomini
}
//movies with cast including
const moviecast = async(data)=>
{
    const cast = await moviemodel.find({cast:data.cast})
    return cast
}
//movies released on .
const released = async(data)=>
{
    const release = await moviemodel.find({released:{$gt:new Date(data.released)}})
    return release
}
//movies with "scene" in the title
const movietitle= async(data)=>
{
    const scene = await moviemodel.find({ title: /light/i }, "title languages released directors writers countries")
    return scene
}
//Find movies with a viewer rating between 3 and 4 on Tomatoes.
const ratingbw = async(data)=>
{
    const viewbw = await moviemodel.find({ "tomatoes.viewer.rating": { $gte: 3, $lt: 4 } }, "title languages released directors viewer writers countries")
    return ratingbw
}
// movies released before the year 2011
const moviebefore = async(data)=>
{
    const movie = await moviemodel.find({ year: { $lt: 2011 } }, "title languages released year directors countries")
    return movie
}
//movies with "family" in the fullplot.
const fullplot1 = async(data)=>
{
    const movie = await moviemodel.find({ fullplot: /darkness/i }, "title languages fullplot released directors writers countries")
    return movie
}
// movies with "family" mentioned in the plot.
const fullplot2 = async(data)=>
{
    const movie = await moviemodel.find({ plot: /family/i }, "title languages fullplot released directors writers countries")
    return movie
}
//movies with a runtime between 60 and 90 minutes
//const 

module.exports=
{
    savedata,
    movierelease,
    runtime,
    genre,
    moviedir,
    moverelease,
    unrated,
    IMBBvotes,
    rating,  tomatoesviewer, award, nomination,
    moviecast, released, movietitle,
    ratingbw, moviebefore, fullplot1,
    fullplot2
}