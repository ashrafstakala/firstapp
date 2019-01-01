// import librariries
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';


// create the component

export default class Header extends Component{
	componentWillMount(){
	}
	render() {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.textStyle}>{this.props.headerText}</Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	}
});
// make the component available to other parts of the app