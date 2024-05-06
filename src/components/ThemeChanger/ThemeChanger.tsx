import type { RootState } from '@@store/index';
import type { Theme, ThemeName } from '@@types/theme';

import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '@@store/actions';

import ThemeIcon from './ThemeIcon';

import * as themes from '@@themes';

function ThemeChanger() {

    const allThemes: Record<ThemeName, Theme> = themes;

    const currentTheme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();


    const changeTheme = (theme: Theme) => {
        dispatch(themeActions.setTheme(theme));
    };

    const generateDisplayName = (t: Theme): string => {
        const words = t.name.split(" ");

        for(let i = 0; i < words.length; i++) {
            const current = words[i];
            words[i] = current.charAt(0).toUpperCase() + current.substring(1);
        };

        return words.join(" ");
    };

    const renderThemes = () => {
        return Object.keys(allThemes).map((key: string, index: number) => {
            const singleTheme = allThemes[key as ThemeName];
            return(
                <div 
                    key={`theme-${singleTheme.name}-${index}`}
                    className="flex gap-5 bg-card md:bg-transparent rounded-full pr-5 md:pr-0" 
                >
                    <ThemeIcon 
                        theme={singleTheme} 
                        currentTheme={currentTheme}
                        onClick={() => {
                            changeTheme(singleTheme);
                        }}
                    />
                    <p className="md:hidden">{generateDisplayName(singleTheme)}</p>
                </div>
            );
        });
    };

    return(
        <div className="flex items-center p-3 bg-card-light rounded-lg">
            <h1 className="font-semibold text-lg flex-1 text-start">Themes:</h1>
            <div className="flex gap-5 justify-center md:gap-1 flex-col md:flex-row">
                {renderThemes()}
            </div>
        </div>
    );
};

export default ThemeChanger;