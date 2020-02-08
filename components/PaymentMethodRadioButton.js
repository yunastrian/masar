import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

export class PaymentMethodRadioButton extends React.Component {
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
		const { options } = this.props;
    const { value } = this.state;
    
    return (
      <View>
				{options.map(item => {
					return (
						<View key={item.id} style={styles.containerButton}>
              <Image
                source={require(item.imageUri)}
                style={styles.menuImage}
              />
              <Text style={styles.titleText}>{item.title}</Text>
							<TouchableOpacity
								style={styles.circle}
								onPress={this.handleChange(item.id)}
							>
								{value === item.id && <View style={styles.checkedCircle} />}
							</TouchableOpacity>
						</View>
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
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
    padding: 5,
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  menuImage: {
    height: 50,
    aspectRatio: 1
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: Colors.grey,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkedCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: Colors.darkBlue,
	},
})