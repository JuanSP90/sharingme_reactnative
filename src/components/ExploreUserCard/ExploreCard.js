import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
// import styles from './ExploreCard.styles';

const ExploreCard = ({ user }) => {
    // const navigation = useNavigation();

    const styles = StyleSheet.create({
        body: {
            backgroundColor: 'white',
        },
        formatContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: 'auto', // Replace with appropriate width
            height: 'auto', // Replace with appropriate height
            margin: 5,
        },
        coursesBox: {
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            padding: '20px',
        },
        coursesItem: {
            width: '50%', // Replace with appropriate width
            height: '20vh', // Replace with appropriate height
            margin: 0,
            marginBottom: 10,
            minHeight: 97,
            overflow: 'hidden',
            borderRadius: 28,
        },
        coursesItemLink: {
            display: 'flex',
            padding: 10,
            backgroundColor: '#121212',
            overflow: 'hidden',
            position: 'relative',
        },
        coursesItemTitle: {
            minHeight: 97,
            paddingBottom: 0,
            overflow: 'hidden',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#FFF',
            zIndex: 2,
            position: 'relative',
        },
        coursesItemDateBox: {
            fontSize: 18,
            color: '#FFF',
            minHeight: 27,
            zIndex: 2,
            position: 'relative',
            overflowWrap: 'break-word',
        },
        coursesItemDate: {
            fontWeight: 'bold',
            color: 'rgb(88, 175, 221)',
            fontSize: 12,
            // transition: 'color .5s ease',
        },
        coursesItemBg: {
            height: 128,
            width: 128,
            zIndex: 1,
            position: 'absolute',
            top: -75,
            right: -75,
            borderRadius: 64,
            // transition: 'all .5s ease',
        },
    });
    const visit = () => {
        // navigation.navigate('UserProfile', { userName: props.userName });
        console.log('visitando')
    };

    return (
        <View style={styles.formatContainer}>
            <TouchableOpacity style={styles.coursesBox} onPress={visit}>
                <View
                    style={[
                        styles.coursesItem,
                        user.index % 6 === 0 && {
                            backgroundColor: user.backgroundColor,
                        },
                    ]}
                >
                    <View
                        style={[
                            styles.coursesItemBg,
                            { backgroundColor: user.backgroundColor },
                        ]}
                    />
                    <Text style={styles.coursesItemTitle}>{user.userName}</Text>
                    <View style={styles.coursesItemDateBox}>
                        <Text>
                            {user.tag1} | {user.tag2} | {user.tag3}
                        </Text>
                    </View>
                    <Text style={styles.coursesItemDate}>From: {user.location}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ExploreCard;








