//import liraries
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text , TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// create a component
export default class Welcome extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            dispatch: PropTypes.func,
        }).isRequired,
    }

    static navigationOptions = {
        header: null,
    };

    navigateToUser = () => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({ routeName: 'User'})
            ]
        })
        dispatch(resetAction);
    };


    render() {
        return (
        <View style={styles.container} >
                <Text style={styles.welcomeTitle}>Bem-vindo</Text>
                <Text style={styles.welcomeDescription}>
                    Para continuar, precisamos que você informe seu usuário no GitHub
                </Text>

                <TextInput 
                    style={styles.imput}
                    placeholder="Digite seu usuário"
                />

                <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
                    <Text style={styles.buttonText}>Prosseguir</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
 