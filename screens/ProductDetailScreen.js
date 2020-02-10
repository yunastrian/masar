import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Image,
  FlatList,
  Button,
} from 'react-native';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';

import ProductDetailInfoView from '../components/ProductDetailInfoView';
import VoucherView from '../components/VoucherView';

export default class ProductDetailScreen extends React.Component {

  state = {
    productTitle: '',
    productPrice: '',
    productRating: '',
    isAR: false,
    seenCount: 0,
    soldCount: 0,
    favouriteCount: 0,
    voucher: []
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.productImage}/>
        <View style={style.productTitleContainer}>
          <View>
            <Text style={styles.productTitleText}>{this.state.productTitle}</Text>
            <Text style={styles.productPriceText}>{CurrencyFormat(this.state.productPrice)}</Text>
          </View>
          <View>
            { this.state.isAR && 
              <Button style={styles.ARButton}>Coba AR</Button>
            }
            <Text>{this.state.productRating}/5.0</Text>
          </View>
        </View>
        <View style={styles.productInfoContainer}>
          <ProductDetailInfoView
            title={Dilihat}
            description={this.state.seenCount}
          />
          <ProductDetailInfoView
            title={Terjual}
            description={this.state.soldCount}
          />
          <ProductDetailInfoView
            title={Favorit}
            description={this.state.favouriteCount}
          />
          <ProductDetailInfoView/>
        </View>
        <View>
          <FlatList
            horizontal
            data={this.state.voucher}
            renderItem={({ item }) => <VoucherView 
                                        title={item.title} 
                                        description={item.description}
                                      />
                        }
            keyExtractor={item => item.title}
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
  productImage: {
    width: '100%',
    height: 70
  },
  productTitleContainer: {
    flexDirection: 'row'
  },
  productInfoContainer: {
    flexDirection: 'row'
  },
  productTitleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  productPriceText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.lightRed
  },
  ARButton: {
    backgroundColor: Colors.darkBlue,
    color: Colors.white,
    borderRadius: 5
  }
});
