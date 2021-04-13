import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Snackbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import GoalsCard from './src/components/GoalsCard';

export default function App() {
	const [visible, setVisible] = useState(false);

	const onToggleSnackBar = () => setVisible(!visible);

	const onDismissSnackBar = () => setVisible(false);

	function launchSnack() {
		return (
			<View>
				<Snackbar
					visible={visible}
					onDismiss={onDismissSnackBar}
					duration={2000}
					wrapperStyle={{
						width: snack_width,
          } }
          style={{backgroundColor: '#01e576'}}
					bottom={height_snack}
				>
					This is an in-app notification snackbar to show to the user when they perform an action. Clicking it
					should change the text.
				</Snackbar>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* Header Section */}
			<View style={styles.header}>
				<Text style={styles.text_header}>Afternoon Jo</Text>
				<Text style={styles.header_subtitle}>Here's the latest</Text>
				<Text style={styles.header_amount}>KES 42,000</Text>
				<Text style={styles.header_subtitle2}>Total Funds</Text>
			</View>

			{/* Footer Section */}
			<View style={styles.footer}>
				<ScrollView>
					<Text style={styles.text_footer}>Your Goals</Text>

					{/* Goal Cards */}
					<GoalsCard />
					<GoalsCard />
				</ScrollView>
				{launchSnack()}

				{/* Button */}
				<View style={styles.button}>
					<TouchableOpacity style={styles.signIn} onPress={onToggleSnackBar}>
						<LinearGradient colors={['#01e576', '#01e576']} style={styles.signIn}>
							<Text style={[styles.textSign, { color: '#ffffff' }]}>
								{visible ? 'Close Snackbar' : 'Show Snackbar'}
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>

			{/* Statusbar Design */}
			<StatusBar style="auto" />
		</View>
	);
}

const { height, width } = Dimensions.get('screen');
const height_snack = height * 0.62;
const snack_width = width * 0.9;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#4b5e7f',
	},
	header: {
		flex: 2,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	footer: {
		flex: 4,
		backgroundColor: '#f8f9ff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 24,
	},
	header_subtitle: {
		color: '#ffffff',
		fontWeight: '200',
		fontSize: 15,
		marginTop: 10,
	},
	header_amount: {
		color: '#01e576',
		fontWeight: 'bold',
		fontSize: 28,
		marginTop: 10,
	},
	header_subtitle2: {
		color: '#ffffff',
		fontWeight: '200',
		fontSize: 15,
	},
	text_footer: {
		color: '#4b5e7f',
		fontWeight: 'bold',
		fontSize: 18,
	},

	button: {
		alignItems: 'center',
		marginTop: 50,
	},
	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
	},
	textSign: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
