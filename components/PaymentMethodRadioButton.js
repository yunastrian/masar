import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

const paymentList = [
  {
    id: 1,
    title: 'BRI'
  }
]

export default class PaymentMethodRadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  state = {
		value: null,
  };
  
  handleChange(itemId) {
    this.setState({value: itemId})
    this.props.onChange(itemId);
  }

	render() {
    const { value } = this.state;
    
    return (
      <View>
				{paymentList.map(item => {
					return (
						<TouchableOpacity key={item.id} style={styles.containerButton} onPress={() => this.handleChange(item.id)}>
              <Text style={styles.titleText}>{item.title}</Text>
							<View
								style={styles.circle}
							>
								{value === item.id && <View style={styles.checkedCircle} />}
							</View>
						</TouchableOpacity>
					);
				})}
			</View>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.lightBlue2,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    padding: 10,
  },
  menuImage: {
    height: 50,
    aspectRatio: 1
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1
  },
  circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: Colors.lightBlue2,
		alignItems: 'center',
    justifyContent: 'center',
	},
	checkedCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
	},
})