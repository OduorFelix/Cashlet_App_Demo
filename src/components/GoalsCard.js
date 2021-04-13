import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const GoalsCard = () => {
	return (
		<Animatable.View animation="fadeInLeft" duration={600} style={styles.card}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<View>
					<Text style={styles.card_title}>Goal 1</Text>
					<Text style={styles.card_subtitle}>KES 12,000</Text>
				</View>

				<View>
					<View style={{ backgroundColor: '#01e576', padding: 5, borderRadius: 5 }}>
						<Text style={styles.status_text}>Finish Goal</Text>
					</View>
				</View>

				<View>
					<Feather name="chevron-right" color="green" size={20} />
				</View>
			</View>
		</Animatable.View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#ffffff',
		borderRadius: 20,
		marginTop: 5,
		padding: 25,
	},
	card_title: {
		color: '#4b5e7f',
		fontWeight: 'bold',
		fontSize: 20,
	},
	card_subtitle: {
		color: '#000000',
		fontWeight: '200',
		fontSize: 18,
	},
	status_text: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 15,
	},
});

export default GoalsCard;
