import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

function ExploreUserCard({ user }) {

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            backgroundColor: 'grey',

        },
        text: {
            margin: 5
        },
        title: {
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold'
        }
    })

    return (
        <View>
            <Text style={styles.title}>{user.userName}</Text>
            <Text>{user.location}</Text>
            <View style={styles.container}>
                <Text style={styles.text}>{user.tag1}</Text>
                <Text style={styles.text}>{user.tag2}</Text>
                <Text style={styles.text}>{user.tag3}</Text></View>
        </View>
    )
}

export default ExploreUserCard