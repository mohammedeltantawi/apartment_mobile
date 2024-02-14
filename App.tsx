import React from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	StatusBar,
	StyleSheet
} from "react-native";

import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Host } from "react-native-portalize";
import Navigation from "./src/navigation/index";




function App(): React.JSX.Element {
	const queryClient = new QueryClient();

  return (
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.kavStyle}
				>
					<SafeAreaProvider>
								<GestureHandlerRootView style={styles.rootView}>
									<QueryClientProvider client={queryClient}>
										<Host>
											<Navigation />
										</Host>
									</QueryClientProvider>
								</GestureHandlerRootView>						
					</SafeAreaProvider>
				</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  kavStyle: { flex: 1 },
  rootView: { flexGrow: 1 }

});

export default App;
