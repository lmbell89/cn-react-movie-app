import noFile from '../images/imageNotFound.w200.png'

const parseMovie = async (json) => {
    let img

    if (json.poster_path) {
        img = await getImage(json.poster_path)
    } else {
        img = noFile
    }

    const movie = {
        title: json.title,
        imgSrc: img,
        voteAvg: json.vote_average.toFixed(1),
        releaseDate: json.release_date,
        overview: json.overview,
        movieId: json.id
    }

    return movie
}

const search = async (url) => {
    const json = await fetch(url).then(res => res.json())

    if (!json.results) {
        return
    }
    
    const movies = await Promise.all(json.results.map(data => parseMovie(data)))

    return {
        results: movies,
        pageCount: json.total_pages,
        pageItems: json.results.length,
        totalItems: json.total_results
    }
}

const getImage = async (path) => {   
    const src = await fetch(`${IMAGE_BASE_URL}/w200/${path}`)
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))

    return src
}

const getQueryString = (searchParams) => {
    const sortTypes = {
        'title': 'original_title.asc',
        'rating': 'vote_average.desc',
        'date': 'primary_release_date.desc',
        'popularity': 'popularity.desc'
    }

    let queries = [`api_key=${Api.KEY}`]

    if (searchParams.title) {
        const keyWords = searchParams.title.split(" ").filter(n => n).join("+")
        queries.push(`query=${keyWords}`)
    }

    if (searchParams.sort) {
        queries.push(`sort_by=${sortTypes[searchParams.sort]}`)
    }

    if (searchParams.adult) {
        queries.push(`include_adult=true`)
    }

    if (searchParams.page) {
        queries.push(`page=${searchParams.page}`)
    }

    if (searchParams.minRating) {
        queries.push(`vote_average.gte=${searchParams.minRating}`)
    }

    if (searchParams.minVotes) {
        queries.push(`vote_count.gte=${searchParams.minVotes}`)
    }

    if (searchParams.year) {
        queries.push(`year=${searchParams.year}`)
    }

    return queries.join("&")
}

const MOVIE_BASE_URL = "https://api.themoviedb.org/3"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p"


export class Api {
    static KEY = "0f0a1bd520946ddd18204d0ae65f52ed"

    static getMovieById = async (id) => {
        const url = `${MOVIE_BASE_URL}/movie/${id}?api_key=${Api.KEY}`
        return fetch(url).then(res => res.json()).then(json => parseMovie(json))
    }

    static getMovieByTitle = async (searchParams) => {
        const queryString = getQueryString(searchParams)
        const url = `${MOVIE_BASE_URL}/search/movie?${queryString}`
        return await search(url)
    }

    static getSearchResults = async (searchParams) => {
        const queryString = getQueryString(searchParams)
        const url = `${MOVIE_BASE_URL}/discover/movie?${queryString}`
        return await search(url)
    }

    static getSimilarMovies = async (id, page) => {
        const url = `${MOVIE_BASE_URL}/movie/${id}/similar?api_key=${Api.KEY}&page=${page}`
        return await search(url)
    }
}