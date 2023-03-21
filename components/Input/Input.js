import { View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../redux/todo/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

const Input = ({onChangeText, onPress, value}) => {

    const [title, setTitle] = useState()
    const dispatch = useDispatch()

    function ekle() {
        if (title) {
          dispatch(addTask({ id: nanoid(), title })) //Random id verilerek listeye ekleniyor
          Alert.alert('Yapılacaklar listesine yeni veri eklendi', title)
        }
        setTitle('')
      }

    return (
        <View style={styles.content_container}>

            <View style={styles.input_container}>
                <TextInput
                    placeholder='Add todo...'
                    placeholderTextColor={'black'}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.touch}
                    multiline
                />
            </View>
            <TouchableOpacity
                style={styles.buton}
                onPress={onPress}
            >
                <Icon name='send-circle-outline' size={50} />
            </TouchableOpacity>
        </View>

    )
}

export default Input