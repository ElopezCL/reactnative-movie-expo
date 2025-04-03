import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";
import { MovieDB } from "@/infraestructure/movie-db-responsive";
import { CompleteMovie } from "@/infraestructure/movie.interface";
import { MovieDBDetail } from "@/infraestructure/moviedb-detail-responsive";
import { MovieDBMovieResponse } from "@/infraestructure/moviedb-movie.response";

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
   
   
    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);
        // console.log(JSON.stringify(data, null, 2))

        return MovieMapper.fromTheMovieDBToCompleteMovie(data);

    } catch (error) {
        console.log("Error")
        throw 'Cannot Load Now Playinng Movies'
    }
}