import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Image,
  FlatList,
  Button,
} from 'react-native';
import { ItemDetailInfoView } from '../components/ItemDetailInfoView';
import { VoucherView } from '../components/VoucherView';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';

export default class CategoryScreen extends React.Component {

  state = {
    itemTitle: '',
    itemPrice: '',
    itemRating: '',
    isAR: false,
    seenCount: 0,
    soldCount: 0,
    favoriteCount: 0,
    voucher: []
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.itemImage}/>
        <View style={style.itemTitleContainer}>
          <View>
            <Text style={styles.itemTitleText}>{this.state.itemTitle}</Text>
            <Text style={styles.itemPriceText}>{CurrencyFormat(this.state.itemPrice)}</Text>
          </View>
          <View>
            { this.state.isAR && 
              <Button style={styles.ARButton}>Coba AR</Button>
            }
            <Text>{this.state.itemRating}/5.0</Text>
          </View>
        </View>
        <View style={styles.itemInfoContainer}>
          <ItemDetailInfoView
            title={Dilihat}
            description={this.state.seenCount}
          />
          <ItemDetailInfoView
            title={Terjual}
            description={this.state.soldCount}
          />
          <ItemDetailInfoView
            title={Favorit}
            description={this.state.favoriteCount}
          />
          <ItemDetailInfoView/>
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
  itemImage: {
    width: '100%',
    height: 70
  },
  itemTitleContainer: {
    flexDirection: 'row'
  },
  itemInfoContainer: {
    flexDirection: 'row'
  },
  itemTitleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  itemPriceText: {
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
