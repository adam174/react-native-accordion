import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      articles: [
         {
            id: 0,
            designation:'tomate',
            prix: 3.5,
         },
         {
            id: 1,
            designation:'patate',
            prix: 2.5,
         },
         {
            id: 2,
            designation:'pome',
            prix: 2.5,
         },
         {
            id: 3,
            designation:'banane',
            prix: 1.5,
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.designation)
   }
   render() {
      return (
         <View style = {{ backgroundColor: '#fff',}}> 
            {
               this.state.articles.map((item, index) => (
                   
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                        
                     <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
   
                     <Text style = {styles.text}>
                 {item.designation}  
                     </Text>
                     </View>
                  </TouchableOpacity>
               ))
            }
            
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 20,
      backgroundColor: '#5d466e',
   },
   text: {
      color: '#fff',
   }
})