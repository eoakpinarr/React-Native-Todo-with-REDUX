import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        padding: 10
      },
      todo_list: {
        backgroundColor: colors.todoBackgroundColor,
        margin: 10,
        borderRadius: 10,
        flex: 1,
        padding: 10
      },
      textcompleted: {
        fontSize: 20,
        fontStyle: 'italic',
        textDecorationLine: 'line-through',
        flex: 0.95
      },
      text: {
        fontSize: 20,
        flex: 0.95
      },
      todo_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.05
      },
    
})