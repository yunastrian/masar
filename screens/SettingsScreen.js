import React from 'react';
import { 
  Image,
  Text,
  ScrollView, 
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Colors from '../constants/Colors';
import IconTopButton from '../components/IconTopButton'
import CurrencyFormat from '../utils/Format';
import TitleDescriptionButton from '../components/TitleDescriptionButton';

const listButtonPembeli = [

]

const listButtonPenjual = [

]

export default class SettingsScreen extends React.Component {

  state = {
    profileImageUri: '../Logo.png',
    briLogoImageUri: '../Logo.png',
    name: 'Alif',
    balance: 0,
    value: 'pembeli'
  }

  handleChange = (value) => {
    this.setState({value})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <Image  
          source={require(this.state.profileImageUri)}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>{this.state.name}</Text>
        <Image 
          source={require(this.state.briLogoImageUri)}
          style={styles.briLogoImage}
        /> */}
        {/* <Text>{CurrencyFormat(this.state.balance)}</Text> */}
        <View style={styles.buttonContainer}>
          <IconTopButton iconName={'repeat-outline'} title={'Lihat Mutasi Rekening'}/>
          <IconTopButton iconName={'cash-outline'} title={'Lihat ATM Terdekat'}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={this.state.value === 'pembeli' ? styles.buttonGroupSelected : styles.buttonGroup}
            onPress={this.handleChange('pembeli')}
          />
          <TouchableHighlight
            style={this.state.value === 'penjual' ? styles.buttonGroupSelected : styles.buttonGroup}
            onPress={this.handleChange('penjual')}
          />
        </View>
        <FlatList
          data={this.state.value === 'pembeli' ? listButtonPembeli : listButtonPenjual}
          renderItem={({ item }) => <TitleDescriptionButton
                                      title={item.title}
                                      description={item.description}
                                    />
                      }
          keyExtractor={item => item.id}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  profileImage: {

  },
  nameText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  briLogoImage: {

  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonGroup: {
    backgroundColor: Colors.white,
    color: Colors.black,
    fontSize: 12,
    fontWeight: 'bold'
  },
  buttonGroupSelected: {
    backgroundColor: Colors.lightBlue,
    color: Colors.black,
    fontSize: 12,
    fontWeight: 'bold'
  }
});
