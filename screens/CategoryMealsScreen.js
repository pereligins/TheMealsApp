import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const CategoryMealsScreen = props => {
    return (<View style={styles.screen}>
        <Text>CategoryMealsScreen</Text>
        <Button title='Go to Details' onPress={() => {props.navigation.navigate({routeName: 'MealDetail'})}}/>
        <Button title='Go Back' onPress={() => {props.navigation.goBack()}}/>
    </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;

