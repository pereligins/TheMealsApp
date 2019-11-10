import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import FavoritesScreen from "./FavoritesScreen";
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
    return (<View style={styles.screen}>
        <Text>FiltersScreen</Text>
    </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

FiltersScreen.navigationOptions = navData => {
    return  {headerTitle: 'Filters meals!',
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

export default FiltersScreen;

