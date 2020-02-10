import React from 'react';
import { 
  FlatList,
  ScrollView, 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import TitleDescriptionText from '../components/TitleDescriptionText'
import PurchaseDetailBar from '../components/PurchaseDetailBar'

export default class PurchaseSummaryScreen extends React.Component {
  state = {
    name: "",
    phone: "",
    address: "",
    subTotal: 0
  }

  handleChange(paymentId) {
    this.setState({paymentId})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
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
            <FlatList 
              data={this.state.purchases}
              renderItem={({item}) => <PurchaseDetailBar
                                        productName={item.productName}
                                        productAmount={item.productAmount}
                                        price={item.price}
                                        subPrice={item.price * item.productAmount}
                                      />
                          }
            />
            <View>
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
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  titleSectionText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textContainer: {
    flex:1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 5,
    height: 70,
    justifyContent: 'center',
    padding: 5,
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});
