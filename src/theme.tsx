import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from 'react';

export type Theme = 'light' | 'dark';

type ThemeContextValue = {
	theme: Theme;
	toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(): Theme {
	if (typeof document === 'undefined') return 'dark';
	if (document.documentElement.classList.contains('light')) return 'light';
	if (document.documentElement.classList.contains('dark')) return 'dark';
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

function applyTheme(theme: Theme) {
	const root = document.documentElement;
	root.classList.remove('light', 'dark');
	root.classList.add(theme);
	document.body.classList.remove('light', 'dark');
	document.body.classList.add(theme);
	root.style.colorScheme = theme;
	localStorage.setItem('theme', theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(readStoredTheme);

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	const toggle = useCallback(() => {
		setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider');
	}
	return context;
}
