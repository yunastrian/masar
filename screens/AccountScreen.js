import React from 'react';
import { 
  Image,
  Text,
  ScrollView, 
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import IconTopButton from '../components/IconTopButton'
import { CurrencyFormat } from '../utils/Format';
import TitleDescriptionButton from '../components/TitleDescriptionButton';

const listButtonPembeli = [
  {
    'title': 'Voucher',
    'description': 'Lihat voucher yang kamu punya2'
  },
  {
    'title': 'Voucher',
    'description': 'Lihat voucher yang kamu punya2'
  }
]

const listButtonPenjual = [
  {
    'title': 'Voucher',
    'description': 'Lihat voucher yang kamu punya'
  }
]

export default class AccountScreen extends React.Component {
  state = {
    profileImageUri: '../assets/images/robot-dev.png',
    name: 'pengguna',
    balance: 0,
    value: 'pembeli'
  }

  handleChange = (value) => {
    console.log(value)
    this.setState({value})
  }

  render() {
    const pembeliValue = 'pembeli'
    const penjualValue = 'penjual'

    const buttonPembeli = listButtonPembeli.map((item) => (
      <TitleDescriptionButton
        title={item.title}
        description={item.description}
      />   
    ));

    const buttonPenjual = listButtonPenjual.map((item) => (
      <TitleDescriptionButton
        title={item.title}
        description={item.description}
      />   
    ));

    return (
      <ScrollView style={styles.container}>
        <View style={styles.firstContainer}>
          <Image 
            source={require('../assets/images/bri.png')}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>{this.state.name}</Text>
          <Image 
            source={require('../assets/images/bri.png')}
            style={styles.briLogoImage}
          />
          <Text style={styles.balanceText}>{CurrencyFormat(this.state.balance)}</Text>
          <View style={styles.buttonContainer}>
            <IconTopButton iconName={'md-document'} title={'Lihat Mutasi Rekening'}/>
            <IconTopButton iconName={'md-cash'} title={'Lihat ATM Terdekat'}/>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[(this.state.value === 'pembeli' ? styles.buttonGroupSelected : styles.buttonGroup), styles.buttonGroupLeft]}
              value={pembeliValue}
              onPress={() => this.handleChange(pembeliValue)}
            >
              <Text>Pembeli</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[(this.state.value === 'penjual' ? styles.buttonGroupSelected : styles.buttonGroup), styles.buttonGroupRight]}
              value={penjualValue}
              onPress={() => this.handleChange(penjualValue)}
            >
              <Text>Penjual</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.secondContainer}>
          {this.state.value === 'pembeli' && listButtonPembeli.map((item, key) => {
            return (
              <TitleDescriptionButton 
                title={item.title}
                description={item.description}
              />
            );
          })}
          {this.state.value === 'penjual' && listButtonPenjual.map((item, key) => {
            return (
              <TitleDescriptionButton 
                title={item.title}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    flexDirection: 'column',
    backgroundColor: Colors.lightGrey2
  },
  firstContainer: {
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    elevation: 5,
  },
  secondContainer: {
    // paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
    elevation: 5,
    marginTop: 10
  },
  profileImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    alignSelf: "center"
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  balanceText: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  briLogoImage: {
    marginTop: 10,
    alignSelf: "center",
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonGroupLeft: {
    width: 165,
    padding: 5,
    alignItems: "center",
    borderColor: Colors.lightBlue2,
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonGroupRight: {
    width: 165,
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    borderColor: Colors.lightBlue2,
    borderWidth: 2
  },
  buttonGroup: {
    backgroundColor: Colors.white,
  },
  buttonGroupSelected: {
    backgroundColor: Colors.lightBlue2,
  },
  textButtonGroup: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: 'bold'
  }
});