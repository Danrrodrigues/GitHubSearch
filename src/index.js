import './config/ReactotronConfig';
import React,{ Component } from 'react';
import { AsyncStorage } from 'react-native';
import createRootNavigator from './routes';

export default class App extends Component{
  state = {
    userExists: false,
    userChecked: false,
  };
  // Executar antes da criação do compenete em si
  componentWillMount(){

    // AsyncStorage.clear(); // limpa storage
    this.checkUser().then((response) => {
      // retorna resultado atráves do response se tem usuário salvo
      // e marca como true informando que já foi checado o usuário devido se async
      this.setState({ userExists: response, userChecked: true});
    })
  }
  // Verificar sem tem usuário salvo no storage
  checkUser = async () => {
    const user = await AsyncStorage.getItem('@Githubsearch:username');
     
    // retorna verdadeiro caso haja usuário salvo
    return user !== null;
  }

  // renderiza objetos na tela
  render() {
    // retorna variavéis com seu devidos valores já preenchidos antes
    const { userChecked, userExists } = this.state;

    //console.tron.log(userChecked);

    // retorna nada caso não tenha sido checado o usuário
    if (!userChecked) return null;

    // recebe layout, que será definido de acordo com a userExists
    const Layout = createRootNavigator(userExists);

    return <Layout/>;
  }
}
 
