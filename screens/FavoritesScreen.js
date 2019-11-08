import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealList from "../components/MealList";
import {MEALS} from "../data/mock-data";

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(
        meal => meal.id === 'm1' || meal.id === 'm2'
    );

    return (<MealList listData={favMeals} navigation={props.navigation} />);
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your favorites!'
}

export default FavoritesScreen;

