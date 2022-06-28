import * as React from "react";
import {
	Text,
	Button,
	SafeAreaView,
	StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
// @ts-ignore
import styled from "styled-components/native";

type RootStackParamList = {
	Home: undefined;
	Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
	return (
		<StyledView>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Button
					title="Go to Detail"
					onPress={() => navigation.navigate("Details")}
				/>
			</SafeAreaView>
		</StyledView>
	);
}

function DetailScreen() {
	return (
		<StyledView>
			<Text>Detail Screen</Text>
		</StyledView>
	);
}

const Stack = createNativeStackNavigator();

function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Details" component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;

const StyledView = styled.View`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`;
