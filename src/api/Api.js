import noFile from '../images/imageNotFound.w200.png'

const parseMovie = async (json) => {
    let img

    if (json.poster_path) {
        img = await getImage(json.poster_path)
    } else {
        img = noFile
    }

    return {
        title: json.title,
        imgSrc: img,
        voteAvg: json.vote_average.toFixed(1),
        releaseDate: json.release_date,
        overview: json.overview,
        movieId: json.id
    }
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
    const src = await fetch(`${Api.IMAGE_BASE_URL}/w200/${path}`)
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))

    return src
}

const getQueryString = (searchParams) => {
    let queries = []

    const sortTypes = {
        'title': 'original_title.asc',
        'rating': 'vote_average.desc',
        'date': 'primary_release_date.desc',
        'popularity': 'popularity.desc'
    }

    if (searchParams.title) {
        queries.push(searchParams.title.split(" ").filter(n => n).join("+"))
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


export class Api {
    static KEY = "0f0a1bd520946ddd18204d0ae65f52ed"
    static MOVIE_BASE_URL = "https://api.themoviedb.org/3"
    static IMAGE_BASE_URL = "https://image.tmdb.org/t/p"

    static getMovieById = async (id) => {
        const url = `${Api.MOVIE_BASE_URL}/movie/${id}?api_key=${Api.KEY}`
        return fetch(url).then(res => res.json()).then(json => parseMovie(json))
    }

    static getMovieByTitle = async (searchParams) => {
        const queryString = getQueryString(searchParams)
        const url = `${Api.MOVIE_BASE_URL}/search/movie?api_key=${Api.KEY}&query=${queryString}`
        return await search(url)
    }

    static getSearchResults = async (searchParams) => {
        const queryString = getQueryString(searchParams)
        const url = `${Api.MOVIE_BASE_URL}/discover/movie?api_key=${Api.KEY}&${queryString}`
        return await search(url)
    }
}