import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '@/infraestructure/movie.interface';

import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
    className?: string;  
    loadingNextPage?: () => void;
}

const MovieHorizontalList = ({title,movies,className,loadingNextPage}:Props) => {
    
    const isLoading = useRef(false)

    useEffect(() => {
        setTimeout(() =>{
            isLoading.current= false;
        },200)
    }, [movies])
    

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>{
        if(isLoading.current) return;

        const {contentOffset,layoutMeasurement,contentSize} = event.nativeEvent
        
        const iEndReached = (contentOffset.x + layoutMeasurement.width * 600) >= contentSize.width;

        if(!iEndReached) return;

        isLoading.current = true;

        console.log("Cargar siguiente Peliculas")
        loadingNextPage && loadingNextPage();
        isLoading.current = false;
    }
 
 
    return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

    <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({item}) => <MoviePoster id={ item.id} poster={item.poster } smallPoster />}
        onScroll={onScroll}
   />

    </View>
  )
}

export default MovieHorizontalList