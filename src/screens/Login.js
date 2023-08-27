import React from 'react'
import { View, Button, Text } from 'react-native'


const Login = ({ navigation }) => {
    return (
        <View>
            <Text>Hola estas en Login</Text>
            <Button title='Ir a profile' onPress={() => navigation.navigate('Profile')} />
            <Button title='Ir a explore' onPress={() => navigation.navigate('Explore')} />
        </View>
    )
}

export default Login