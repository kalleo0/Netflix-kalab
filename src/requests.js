const requests = {
    fetchTrending: `/trending/all/week?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=12b1a84f0367c6bb9d5bbf4518906d2e&with_genres=99`,
  };
  export default requests;