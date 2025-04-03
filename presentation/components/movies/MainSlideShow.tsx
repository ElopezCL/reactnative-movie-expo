import { View, Text, Dimensions, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infraestructure/movie.interface'

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import MoviePoster from './MoviePoster'

interface Props {
    movies: Movie[]
}



const MainSlideShow = ({movies}:Props) => {

    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;

  return (
    <View className='h-[250px] w-full mb-0'>
     <Carousel
        ref={ref}
        data={movies}
        renderItem={({item}) =>
          <MoviePoster
          id={item.id}
          poster={item.poster}

          />
        }
        width={200}
        height={350}
        style={{
            width: width,
            height: 350,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        mode="parallax"
        modeConfig={{
            parallaxAdjacentItemScale: 0.9,
            parallaxScrollingOffset: 50
        }}
        defaultIndex={0}
     />
    </View>
  )
}

export default MainSlideShow