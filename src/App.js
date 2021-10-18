import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ProvideAuth } from 'utils/use-auth';
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

const App = () => {

	const [theme, setTheme] = useState('light');
  	
	const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light');

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<ProvideAuth>
				<div className="App">
							
				</div>
			</ProvideAuth>
		</ThemeProvider>
	);	
}

export default App;