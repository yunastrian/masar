import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Picker,
  View,
  Text,
} from 'react-native';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';
import PaymentMethodRadioButton from '../components/PaymentMethodRadioButton';

export default class FinalPaymentScreen extends React.Component {
  state = {
    shipment: "0",
    totalPayment: 0,
    totalShipment: 0,
    assurance: 0,
    total: 0,
    paymentId: null
  }

  handleChange = (paymentId) => {
    this.setState({paymentId})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.titleSectionText}>Jenis Pengiriman</Text>
          <Picker
            selectedValue={this.state.shipment}
            style={styles.shipmentPicker}
            onValueChange={
              (value, _) => {
                this.setState({shipment: value})
              }
            }
          >
            <Picker.Item style={styles.shipmentPicker} label="Reguler" value="0" />
            <Picker.Item style={styles.shipmentPicker} label="Express" value="1" />
          </Picker>
        </View>
        <View style={styles.section}>
          <Text style={styles.titleSectionText}>Ringkasan Belanja</Text>
          <View style={styles.purchaseDetailContainer}>
            <View style={styles.purchaseDetailLeftContainer}>
              <Text style={styles.purchaseDetailLeftText}>Total Harga</Text>
              <Text style={styles.purchaseDetailLeftText}>Total Ongkos Kirim</Text>
              <Text style={styles.purchaseDetailLeftText}>Asuransi Pengiriman</Text>
              <Text style={styles.purchaseDetailLeftText}>Total</Text>
            </View>
            <View style={styles.purchaseDetailRightContainer}>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.totalPayment)}</Text>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.totalShipment)}</Text>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.assurance)}</Text>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.total)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.titleSectionText}>Pilih Metode Pembayaran</Text>
          <PaymentMethodRadioButton 
            onChange={this.handleChange}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 10
  },
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: Colors.lightGrey2,
    flexDirection: 'column'
  },
  titleSectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  shipmentPicker: {
  },
  purchaseDetailContainer: {
    flex:1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 10,
    // elevation: 10,
    borderWidth: 2,
    borderColor: Colors.lightBlue2,
    justifyContent: 'center',
    padding: 10,
    shadowColor: Colors.black,
  },
  purchaseDetailLeftContainer: {
    flex:3,
    flexDirection: "column",
  },
  purchaseDetailLeftText: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4
  },
  purchaseDetailRightContainer: {
    flex:1,
    flexDirection: "column",
  },
  purchaseDetailRightText: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.lightRed,
    marginBottom: 4
  },
});