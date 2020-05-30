import React from 'react';
import {View, Text, FlatList, Button, TextInput} from 'react-native';

class Article extends React.Component {
  constructor (props) {
    super (props);

    this.textModif = 'Désignation';
    this.prix = 0;
    this.isUpdate = false;

    this.state = {
      db: [],
    };
  }

  afficher = () => {
    if (!this.isUpdate) {
      this.setState ({
        db: [
          {designation: 'Clavier', prix: 0},
          {designation: 'cable', prix: 10},
          {designation: 'Ecran', prix: 150},
        ],
      });
    } else {
      this.setState ({
        db: this.state.db,
      });
      console.log ('else');
    }
  };

  changeText (text) {
    this.textModif = text;
  }
  changePrix (text) {
    this.prix = text;
  }

  ajouter = () => {
    if (this.textModif.length > 0 && this.prix.length > 0) {
      this.setState ({
        db: [...this.state.db, {designation: this.textModif, prix: this.prix}],
      });
      this.isUpdate = true;
    }
  };

  updatePlaceholder = () => {
    this.prix = 0;
    this.textModif = 'Designation';
  };

  render () {
    this.updatePlaceholder ();

    return (
      <View>
        <FlatList
          data={this.state.db}
          renderItem={({item}) => (
            <Text>{item.designation + ' ' + item.prix}</Text>
          )}
        />
        <TextInput
          style={{marginTop: 10}}
          placeholder={this.textModif}
          onChangeText={text => this.changeText (text)}
        />
        <TextInput
          placeholder={this.prix}
          onChangeText={text => this.changePrix (text)}
          onSubmitEditing={() => this.ajouter ()}
        />
        <Button title="Afficher" onPress={this.afficher} />
        <Button title="Ajouter" onPress={this.ajouter} />
      </View>
    );
  }
}

export default Article;

