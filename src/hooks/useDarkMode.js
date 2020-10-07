import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"



const useDarkMode = (initialValue = false) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
    useEffect(() => {
        Boolean(darkMode)
            ? document.body.classList.add('dark-mode')
            : document.body.classList.remove('dark-mode')
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return [darkMode, toggleDarkMode];
};

export default useDarkMode;