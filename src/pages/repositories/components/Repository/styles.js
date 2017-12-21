import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../../styles';


const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        alignSelf: 'stretch',
        padding:20,
        borderRadius: 3,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: colors.inactive,
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 8,
        marginTop: 20, 
        marginHorizontal: 20
    },
    title: {
        color: colors.primary,
        fontSize: fonts.regular,
        fontWeight: 'bold'
    },
    infoContainer:{
        flexDirection:'row',
        marginTop: 10
    },
    info:{
        flexDirection:'row',
        marginRight: 10,
        alignItems: 'center'
    },
    infoIcon:{
        color: colors.dark
    },
    inforText:{
        color: colors.dark,
        fontSize: fonts.small,
        marginLeft: 5
    }
});

export default styles;