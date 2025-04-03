import { movieApi } from "@/core/api/movie-api"
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";
import { MovieDB } from "@/infraestructure/movie-db-responsive";


export const nowPlayingAction = async() => {
    try {


        const { data } = await movieApi.get<MovieDB>('/now_playing');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        console.log(JSON.stringify(movies,null,2))
        return movies;
        
    } catch (error) {
        console.log("Error")
        throw 'Cannot Load Now Playinng Movies'
    }
}