import { nowPlayingAction } from "@/core/actions/movies/now-playing-action"
import { popularMoviesAction } from "@/core/actions/movies/popular-playing-action";
import { topRateAction } from "@/core/actions/movies/top-rate-action";
import { upcomingMovieAction } from "@/core/actions/movies/upcoming-action";
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24horas
      });

      const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // 24horas
      });

      const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top-rated'],
        queryFn: ({pageParam}) => {
            console.log("Soy el page Param", {pageParam})
            return topRateAction({page: pageParam})
        },

        staleTime: 1000 * 60 * 60 * 24, // 24horas
        getNextPageParam: (lastPage,pages) => {
            return pages.length + 1
        }
      });

      const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMovieAction,
        staleTime: 1000 * 60 * 60 * 24, // 24horas
      });

         return {
            nowPlayingQuery,
            popularQuery,
            topRatedQuery,
            upcomingQuery
         }
}