const movieService = require('./movie_service')

describe('movieService', () => {
  it('gets a list of popular movies', async () => {
    const res = await movieService.getPopular()
    console.log(res)
    expect(res.status).toEqual(200)
    expect(res.data.total_results).toBeGreaterThan(0)
    expect(res.data.total_pages).toBeGreaterThan(0)

    const mostPopular = res.data.results[0]
    expect(mostPopular.id).toBeDefined()
    expect(mostPopular.title).toBeDefined()
    expect(mostPopular.release_date).toBeDefined()
  })

  it('searches for movies by title', async () => {
    const searchString = "Star Wars"
    const res = await movieService.searchTitle(searchString)
    expect(res.status).toEqual(200)
    expect(res.data.total_results).toBeGreaterThan(0)
    expect(res.data.total_pages).toBeGreaterThan(0)

    const searchResult = res.data.results[0]
    expect(searchResult.id).toBeDefined()
    expect(searchResult.title).toContain(searchString)
    expect(searchResult.release_date).toBeDefined()
  })

  it('gets details of individual movies', async () => {
    const res = await movieService.getMovie(11)
    expect(res.status).toEqual(200)

    const starWars = res.data
    expect(starWars.id).toBeDefined()
    expect(starWars.title).toEqual("Star Wars")
    expect(starWars.release_date).toBeDefined()
    expect(starWars.poster_path).toBeDefined()
    expect(starWars.budget).toBeDefined()
    expect(starWars.production_companies[0].name).toEqual("Lucasfilm")
  })
})
