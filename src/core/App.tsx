import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import RouterNavigator from "./RouterNavigator";

NativeWindStyleSheet.setOutput({
	default: "native",
});

const App: React.FC = () => <RouterNavigator />;

export default App;
