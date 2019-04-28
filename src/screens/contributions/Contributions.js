import Container from "../../components/Container";
import PButton from "../../components/PButton";
import PText from "../../components/PText";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PBackground from '../../components/PBackground';
import PListSection from '../../components/PListSection';
import PListCell from '../../components/PListCell';

const Contributions = () => {
	return (
		<Container>
			<View style={styles.header}>
				<PText color="accent" size="s">Your</PText>
				<PText color="accent" bold size="s"> Top 3 </PText>
				<PText color="accent" size="s">Charities</PText>
			</View>
			<View style={styles.header}>
				<View style={styles.charityIconContainer}>
					<View style={styles.charityIcon}>
						<View style={styles.tablet}><Text style={{ fontSize: 10, fontWeight: 'bold' }}>$300</Text></View>
					</View>
					<PText bold size="xs">Unicef</PText>
				</View>
				<View style={styles.charityIconContainer}>
					<View style={styles.charityIcon}>
						<View style={styles.tablet}><Text style={{ fontSize: 10, fontWeight: 'bold' }}>$300</Text></View>
					</View>
					<PText bold size="xs">American Redcross</PText>
				</View>
				<View style={styles.charityIconContainer}>
					<View style={styles.charityIcon}>
						<View style={styles.tablet}><Text style={{ fontSize: 10, fontWeight: 'bold' }}>$300</Text></View>
					</View>
					<PText bold size="xs">American Redcross</PText>
				</View>
			</View>
			<PBackground>
				<PListSection>
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
					<PListCell type={'transaction'} />
				</PListSection>
			</PBackground>
		</Container>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	charityIconContainer: {
		alignItems: 'center',
		marginHorizontal: 12,
		width: 70
	},
	charityIcon: {
		width: 70,
		height: 70,
		backgroundColor: 'white',
		borderRadius: 50,
		marginBottom: 5
	},
	tablet: {
		position: 'absolute',
		left: 40,
		height: 18,
		backgroundColor: '#1DFFE4',
		borderRadius: 20,
		justifyContent: 'center',
		paddingHorizontal: 4
	}
})

export default Contributions;
