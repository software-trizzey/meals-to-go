import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from "react-native";

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.search}>
					<Text>search</Text>
				</View>
				<View style={styles.list}>
					<Text>list</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, marginTop: StatusBar.currentHeight },
	search: { backgroundColor: "green", padding: 16 },
	list: { flex: 1, backgroundColor: "blue", padding: 16 },
});
