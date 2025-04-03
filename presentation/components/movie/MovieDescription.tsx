import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infraestructure/movie.interface'
import { Formatter } from '@/config/helper/formater';

interface Props {
    movie: CompleteMovie;
}


const MovieDescription = ({ movie }: Props) => {
    return (
        <View className='mx-5'>
            <Text>movie.rating</Text>
            <Text>- {movie.genres.join(',')}</Text>

            <Text className="font-bold mt-5">
                Historia
            </Text>

            <Text className="font-normal mt-2">
                {movie.descripcion}
            </Text>

            <Text className="font-bold mt-2 text-3xl">
                {Formatter.currency(movie.budget)}
            </Text>
        </View>
    )
}

export default MovieDescription