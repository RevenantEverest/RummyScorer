import type { Theme, ThemeColors } from '@@types/theme.js';

const colors: ThemeColors = {
    primary: "#cb3bfc",
    secondary: "#ac010b",
    accent: "#fd872c",
    background: "#100016",
    card: "#381545",
    cardLight: "#200015",
    text: "#f4deff",
    muted: "#7a6e80"
};

const darkTheme: Theme = {
    name: "dark",
    colors
};

export default darkTheme;