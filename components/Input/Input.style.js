import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    input_container: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        padding: 10,
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.todoBackgroundColor
    },
    touch: {
        borderBottomWidth: 1,
        borderBottomColor: colors.bottomColor,
        fontSize: 20,
        color: colors.headerColor,
    },
    buton: {
        backgroundColor: colors.todoBackgroundColor,
        borderRadius: 35,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content_container: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        alignItems: 'center'
    },
})