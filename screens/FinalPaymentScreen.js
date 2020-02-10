import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Picker
} from 'react-native';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';
import PaymentMethodRadioButton from '../components/PaymentMethodRadioButton';

export default class FinalPaymentScreen extends React.Component {
  state = {
    shipment: "regular",
    totalPayment: 0,
    totalShipment: 0,
    assurance: 0,
    total: 0,
    paymentMethod: [],
    paymentId: null
  }

  handleChange(paymentId) {
    this.setState({paymentId})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
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
            <Picker.Item label="Reguler" value="regular" />
            <Picker.Item label="Express" value="express" />
          </Picker>
        </View>
        <View>
          <Text style={styles.titleSectionText}>Ringkasan Belanja</Text>
          <View style={styles.purchaseDetailContainer}>
            <View style={styles.purchaseDetailLeftContainer}>
              <Text style={styles.purchaseDetailLeftText}>Total Harga</Text>
              <Text style={styles.purchaseDetailLeftText}>Total Ongkos Kirim</Text>
              <Text style={styles.purchaseDetailLeftText}>Asuransi Pengiriman</Text>
            </View>
            <View style={styles.purchaseDetailRightContainer}>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.totalPayment)}</Text>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.totalShipment)}</Text>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.assurance)}</Text>
              <Text style={styles.purchaseDetailRightText}>{CurrencyFormat(this.state.total)}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.titleSectionText}>Pilih Metode Pembayaran</Text>
          <PaymentMethodRadioButton 
            options={this.state.paymentMethod}
            onChange={this.handleChange}
          />
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

  },
  shipmentPicker: {

  },
  purchaseDetailContainer: {
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
  purchaseDetailLeftContainer: {
    flex:1,
    flexDirection: "column",
  },
  purchaseDetailLeftText: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: 'bold'
  },
  purchaseDetailRightContainer: {
    flex:1,
    flexDirection: "column",
  },
  purchaseDetailRightText: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.lightRed
  },
});
