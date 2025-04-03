import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useMoviee = (id: number) => {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        movieQuery,
    }
}
