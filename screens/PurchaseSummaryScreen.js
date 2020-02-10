import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import TitleDescriptionText from '../components/TitleDescriptionText'
import PurchaseDetailBar from '../components/PurchaseDetailBar'
import {CurrencyFormat} from '../utils/Format'

export default class PurchaseSummaryScreen extends React.Component {
  state = {
    name: "tes",
    phone: "08x",
    address: "Jl. Cisitu",
    purchases: [
      {
        productId: 1,
        productName: "tas",
        productAmount: 1,
        productPrice: 1000
      },
      {
        productId: 2,
        productName: "tas",
        productAmount: 1,
        productPrice: 1000
      }
    ],
    subTotal: 0
  }

  handleChange(paymentId) {
    this.setState({paymentId})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 15}}>
          <Text style={styles.titleSectionText}>Detail Pengiriman</Text>
          <View style={styles.textContainer}>
            <TitleDescriptionText
              title={"Nama Penerima"}
              description={this.state.name}
            />
            <TitleDescriptionText
              title={"Nomor Telepon"}
              description={this.state.phone}
            />
            <TitleDescriptionText
              title={"Alamat Lengkap"}
              description={this.state.address}
            />
          </View>
        </View>
        <View>
          <Text style={styles.titleSectionText}>Detail Pembelian</Text>
          <View style={styles.textContainer}>
            {this.state.purchases && this.state.purchases.map((item, key) => {
              return (
                <PurchaseDetailBar
                  key={key}
                  productName={item.productName}
                  productAmount={item.productAmount}
                  productPrice={item.productPrice}
                  subPrice={item.productPrice * item.productAmount}
                />
              )})
            }
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
              <View style={styles.purchaseDetailLeftContainer}>
                <Text style={styles.purchaseDetailLeftText}>Sub Total</Text>
              </View>
              <View style={styles.purchaseDetailRightContainer}>
                <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.subTotal)}</Text>
              </View>
            </View>
          </View>          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.lightGrey2,
    flexDirection: 'column',
    paddingHorizontal: 15
  },
  titleSectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textContainer: {
    flexDirection: "column",
    backgroundColor: Colors.white,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'flex-start',
    borderColor: Colors.lightBlue2,
    borderWidth: 2
  },
  purchaseDetailLeftText : {
    fontSize: 14,
    fontWeight: 'bold',
  },
  purchaseDetailRightText : {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.lightRed
  }
});


LinksScreen.navigationOptions = {
  title: 'Kategori',
};
