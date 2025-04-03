import { movieApi } from "@/core/api/movie-api"
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";
import { MovieDB } from "@/infraestructure/movie-db-responsive";


interface Options {
    page?: number;
    limit?: number;
}


export const topRateAction = async({page = 1,limit = 10}: Options) => {
    try {


        const { data } = await movieApi.get<MovieDB>('/top_rated',{
            params: {
                page: page,
            }
        });

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        console.log(JSON.stringify(movies,null,2))
        return movies;
        
    } catch (error) {
        console.log("Error")
        throw 'Cannot Load Top Rated Movies'
    }
}