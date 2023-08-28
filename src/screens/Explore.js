import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import axios from 'axios'


import ExploreUserCard from '../components/ExploreUserCard/ExploreUserCard'

const Explore = () => {
    const [users, setUsers] = useState([]);
    // const URLBACKEND = Config.URL_BACKEND;
    // console.log('del url', URLBACKEND)
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await axios.get(`https://sharingmeb.onrender.com/users/`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener los usuarios', error);
        }
    };

    return (
        <View>
            <Text>Hola estas en Explore</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <ExploreUserCard user={item} />}
                keyExtractor={users.id}
            />
        </View>
    )
}

export default Explore