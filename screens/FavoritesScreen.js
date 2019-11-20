import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealList from "../components/MealList";
import {MEALS} from "../data/mock-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton'
import {useSelector} from "react-redux";

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return (<MealList listData={favMeals} navigation={props.navigation} />);
};

FavoritesScreen.navigationOptions = navData => {
    return  {headerTitle: 'Your favorites!',
    headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
                navData.navigation.toggleDrawer();
            }}
        />
    </HeaderButtons>)}
}

export default FavoritesScreen;

