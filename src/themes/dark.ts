import type { Theme, ThemeColors } from '@@types/theme.js';

const colors: ThemeColors = {
    primary: "#d86bfe",
    secondary: "#ac010b",
    accent: "#fd872c",
    background: "#100016",
    card: "#381545",
    cardLight: "#200015",
    text: "#f4deff",
    muted: "#92849a"
};

const dark: Theme = {
    name: "dark",
    colors
};

export default dark;