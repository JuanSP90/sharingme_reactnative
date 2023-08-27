import React from 'react'
import { View, Text, FlatList } from 'react-native'

import ExploreUserCard from '../components/ExploreUserCard/ExploreUserCard'

const Explore = () => {
    const user = [
        {
            id: 1,
            userName: 'Juan',
            location: 'Estepona',
            tag1: 'hola',
            tag2: 'adios',
            tag3: 'cucu'
        },
        {
            id: 2,
            userName: 'Pepe',
            location: 'Marbella',
            tag1: 'hafdsaa',
            tag2: 'adifadsfa',
            tag3: 'cufsafdsau'
        },
        {
            id: 3,
            userName: 'Manolete',
            location: 'Manoletelandia',
            tag1: 'holdasaa',
            tag2: 'aasadios',
            tag3: 'cuasacu'
        },
    ]
    return (
        <View>
            <Text>Hola estas en Explore</Text>
            <FlatList
                data={user}
                renderItem={({ item }) => <ExploreUserCard user={item} />}
                keyExtractor={user.id}
            />
        </View>
    )
}

export default Explore