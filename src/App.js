import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { ProvideAuth } from 'utils/use-auth';
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import Navbar from "components/navbar/Navbar";

const App = () => {

	const [theme, setTheme] = useState('light');
  	
	const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light');

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<ProvideAuth>
				<BrowserRouter>
					<div className="App">
						<Navbar />
					</div>
				</BrowserRouter>
			</ProvideAuth>
		</ThemeProvider>
	);	
}

export default App;