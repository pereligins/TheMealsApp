import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ScreenCategories = props => {
    return (<View style={styles.screen}>
        <Text>ScreenCategories</Text>
        <Button title='Go to meals' onPress={() => {props.navigation.navigate({routeName: 'CategoryMeals'})}}/>
    </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ScreenCategories;

