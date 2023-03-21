import { Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'

const Header = ({title}) => {

    return (
        <View style = {styles.inner_container}>
            <Text style = {styles.text1}>{title}</Text>
        </View>
    )
}

export default Header
