import { View, Text, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';




const HomeScreen = () => {

  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies();
  const safeArea = useSafeAreaInsets()
  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='red' size={30} />
      </View>
    )
  }


  return (
    <ScrollView>
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl">MoviesAPP</Text>

        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular Movies */}

        <MovieHorizontalList
          title='Populares'
          className='mb-5'
          movies={topRatedQuery.data?.pages.flat() ?? []  }
          loadingNextPage={topRatedQuery.fetchNextPage}
          
        
        />


        {/* Top Rated Movies */}

        <MovieHorizontalList
          title='Mejor Calificadas'
          movies={popularQuery.data ?? []}
          className='mb-5'

        />

        {/* Upcoming Movies */}

        <MovieHorizontalList
          title='Proximamente'
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />


      </View>
    </ScrollView>



  )
}

export default HomeScreen