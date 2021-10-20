import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { ThemeProvider } from "styled-components";
import Cookies from 'js-cookie';
import { ProvideAuth } from 'utils/use-auth';
import { switchTheme } from "actions";
import { Layout } from "layout";
import { Routes } from "routes";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

const App = ({ theme, setTheme }) => {

	useEffect(() => {

		let storedTheme = Cookies.get("theme");

		if(storedTheme) setTheme(storedTheme);

	}, []);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<ProvideAuth>
				<BrowserRouter>
					<div className="App">
						<Layout>
							<Routes />
						</Layout>
					</div>
				</BrowserRouter>
			</ProvideAuth>
		</ThemeProvider>
	);	
	
}

const mapStateToProps = ({ theme }) => ({theme: theme.theme});
  
const mapDispatchToProps = dispatch => ({setTheme: theme => dispatch(switchTheme(theme))});

export default connect(mapStateToProps, mapDispatchToProps)(App);