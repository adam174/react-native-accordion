import React, { Component } from 'react';
import { Text, View, } from 'react-native';

class Header extends Component {
   
   render() { 
      return ( 
         <View style = {{ justifyContent:"center", alignItems:"center",padding: '20',backgroundColor: 'blue',}}>
      
               <Text style= {{  color: "#fff",}}>helooooo</Text>
         </View>
       );
   }
}
 
export default Header;