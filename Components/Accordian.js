import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Colors } from "./Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <Text style={[styles.title]}>{this.props.title}</Text>
          <Icon
            name={
              this.state.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"
            }
            size={30}
            color={Colors.DARKGRAY}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={{}}>
            <FlatList
              data={this.state.data}
              numColumns={1}
              scrollEnabled={false}
              renderItem={({ item, index }) => (
                <View>
                  <TouchableOpacity style={[styles.childRow, styles.button]}>
                    <Text style={[styles.font, styles.itemInActive]}>
                      {item.title} : {item.value}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.childHr} />
                </View>
              )}
              keyExtractor={(item, index) => item.id.toString()}
            />
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 54,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.DARKGRAY,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: Colors.CGRAY,
  },
  childRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.GRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: "100%",
  },
  childHr: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: "100%",
  },
});
