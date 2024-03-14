import React, { createContext, useMemo, useReducer } from 'react';

const themes = {
	dark: {
		backgroundColor: '#242424',
		color: 'white',
	},
	light: {
		backgroundColor: 'white',
		color: 'black',
	},
};

export const ThemeContext = createContext(null);

const themeReducer = (state, action) => {
	if (action.type === 'TOGGLE_THEME') {
		return {
			...state,
			isDark: !state.isDark,
			theme: state.isDark ? themes.light : themes.dark,
		};
	} else {
		return state;
	}
};

export const ThemeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, {
		isDark: false,
		theme: themes.light,
	});

	const { theme, isDark } = state;

	const toggleTheme = () => {
		dispatch({ type: 'TOGGLE_THEME' });
	};

	const contextValue = useMemo(
		() => ({ theme, isDark, toggleTheme }),
		[theme, isDark, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			<style>
				{`:root {
            --background-color: ${theme.backgroundColor};
            --text-color: ${theme.color};
          }`}
			</style>
			{children}
		</ThemeContext.Provider>
	);
};
