import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { addTask, deleteTask, okeyTask } from './redux/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Input from './components/Input'
import Header from './components/Header'
import styles from './styles'

const App = () => {

  const [title, setTitle] = useState()
  const dispatch = useDispatch()
  const todoValues = useSelector(state => state.todos.list)
  const headerText = "Today's tasks"

  const renderTodo = ({ item }) => {
    if (item.title !== '') {
      return (
        <TouchableOpacity
          style={styles.todo_list}
          onPress={() => dispatch(okeyTask({ id: item.id }))}
          onLongPress={() => dispatch(deleteTask(item.id))}
        >
          <View style={styles.todo_container}>

              <Text style={item.completed
                ? styles.textcompleted
                : styles.text
              }>{item.title}</Text>

              <Icon
                name={
                  item.completed
                    ? 'checkbox-marked-circle-outline'
                    : 'close-circle-outline'
                }
                size={25}
                color={item.completed
                  ? 'green'
                  : 'gray'
                } />

          </View>
        </TouchableOpacity>
      )
    }
  }

  function ekle() {
    if (title) {
      dispatch(addTask({ id: nanoid(), title })) //nanoid => Random id verilerek listeye ekleniyor
      Alert.alert('Yeni Veri Eklendi', title)
    }
    setTitle('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={headerText}
      />
      <FlatList
        data={todoValues}
        renderItem={renderTodo}
      />
      <Input
        value={title}
        onChangeText={setTitle}
        onPress={ekle}
      />
    </SafeAreaView>
  )
}

export default App