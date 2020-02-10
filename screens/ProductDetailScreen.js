import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';

import ProductDetailInfoView from '../components/ProductDetailInfoView';
import VoucherView from '../components/VoucherView';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProductDetailScreen extends React.Component {

  state = {
    productTitle: 'title',
    productPrice: 0,
    productRating: 5,
    isAR: true,
    seenCount: 0,
    soldCount: 0,
    favouriteCount: 0,
    voucher: [
      {
        title: 'Voucher Merdeka',
        description: 'Diskon 10%'
      },
      {
        title: 'Voucher Tahun Baru',
        description: 'Diskon 15%'
      },
      {
        title: 'Voucher Pengguna Baru',
        description: 'Diskon 20%'
      }
    ]
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.productImage} source={require('../assets/images/bri.png')}/>
        <View style={styles.productTitleContainer}>
          <View style={styles.productTitleContainerLeft}>
            <Text style={styles.productTitleText}>{this.state.productTitle}</Text>
            <Text style={styles.productPriceText}>{CurrencyFormat(this.state.productPrice)}</Text>
          </View>
          <View style={styles.productTitleContainerRight}>
            { this.state.isAR && 
              <TouchableOpacity style={styles.ARButton}>
                <Text style={styles.ARButtonText}>Coba AR</Text>
              </TouchableOpacity>
            }
            <Text style={styles.productRatingText}>{this.state.productRating}/5.0</Text>
          </View>
        </View>
        <View style={styles.productInfoContainer}>
          <ProductDetailInfoView
            title={'Dilihat'}
            description={this.state.seenCount}
          />
          <ProductDetailInfoView
            title={'Terjual'}
            description={this.state.soldCount}
          />
          <ProductDetailInfoView
            title={'Favorit'}
            description={this.state.favouriteCount}
          />
        </View>
        <View style={styles.voucherContainer}>
          <Text style={styles.voucherText}>Voucher</Text>
          <ScrollView 
            horizontal
          >
            {this.state.voucher.map((item) => {
              return(
                <VoucherView
                  title={item.title} 
                  description={item.description}
                />
              )
            })}
          </ScrollView>
        </View>

        {/*   <FlatList
            horizontal
            data={this.state.voucher}
            renderItem={({ item }) => <VoucherView 
                                        title={item.title} 
                                        description={item.description}
                                      />
                        }
            keyExtractor={item => item.title}
          />
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.lightGrey2,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    backgroundColor: 'white'
  },
  productTitleContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 15,
    marginBottom: 5,
    backgroundColor: Colors.white
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    padding: 15,
    marginBottom: 5
  },
  productTitleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  productPriceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.lightRed
  },
  ARButton: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    width: 90,
    alignSelf: 'flex-end'
  },
  ARButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold'
  },
  productTitleContainerLeft: {
    flex: 3
  },
  productTitleContainerRight: {
    flex: 1
  },
  productRatingText: {
    alignSelf: 'flex-end'
  },
  voucherContainer: {
    padding: 15,
    paddingRight: 0,
    backgroundColor: Colors.white
  },
  voucherText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  }
});