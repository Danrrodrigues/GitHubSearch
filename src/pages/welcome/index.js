//import liraries
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { 
    View, 
    Text , 
    TextInput, 
    TouchableOpacity, 
    AsyncStorage,
    ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
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

    state = {
        username: '',
        loading: false,
        error: false
    };

    checkAndSaveUser = async () =>{
        const response = await api.get(`/users/${this.state.username}`);

        if (!response.ok) throw Error();

        await AsyncStorage.setItem('@Githubsearch:username', this.state.username);
    };


    navigateToUser = () => {
        if (this.state.username.length === 0) return;
        // Checar API se usuário existe
        // Salvar usuário no storage
        this.setState({ loading: true, error: false});

        this.checkAndSaveUser()
            .then(() => {
                
                 // Redirecionar
                const { dispatch } = this.props.navigation;
                const resetAction = NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({ routeName: 'User'})
                    ]
                })
                dispatch(resetAction);
            })
            .catch(() => {
                this.setState({ error: true, loading: false });
            });
  
    };


    render() {
        return (
        <View style={styles.container} >
                <Text style={styles.welcomeTitle}>Bem-vindo</Text>
                <Text style={styles.welcomeDescription}>
                    Para continuar, precisamos que você informe seu usuário no GitHub
                </Text>

                {this.state.error && <Text style={styles.error}>Esse usuário não existe</Text> }

                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.imput}
                    placeholder="Digite seu usuário"
                    onChangeText={(username) => { this.setState({ username }); }}
                />

                <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
                    { this.state.loading
                    ? <ActivityIndicator size="small" color="#FFF"/>
                    :<Text style={styles.buttonText}>Prosseguir</Text>
                    }
                </TouchableOpacity>
                <Text style={styles.welcomeDescription}> Desenvolvido por Danilo A. Rodrigues :)</Text> 
            </View>
        );
    }
}
 