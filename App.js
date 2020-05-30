import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Accordian from "./Components/Accordian";
import { Colors } from "./Components/Colors";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          id: 0,
          title: "tomate",
          data: [
            { id: 0, title: "prix", value: 3.5 },
            { id: 1, title: "Origine", value: "Maroc"},
          ],
        },
        {
          id: 1,
          title: "patate",
          data: [
            { id: 0, title: "prix", value: 2.5 },
            { id: 1, title: "Origine", value: "France" },
          ],
        },
      ],
    };
  }

  render() {
    return (
     
        <View style={styles.container}>
           <Text style={[styles.header]}>Liste d’articles</Text>
           {this.renderAccordians()}
           </View>
 
    );
  }

  renderAccordians = () => {
    const items = [];
    const keys = this.state.menu;
    for (const key of keys) {
      items.push(<Accordian title={key.title} data={key.data} />);
    }

    return items;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: Colors.PRIMARY,
  },header: {
   color: 'black',
   fontWeight:'900',
   justifyContent:'center',
   textAlign:'center'

  }
});
