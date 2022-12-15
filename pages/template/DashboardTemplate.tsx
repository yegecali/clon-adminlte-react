import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/Global";
import { ThemeDark, ThemeLight } from "../../styles/Theme";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { changeTheme } from "../../redux/slice/themeSlice";

type Props = {
  children?: JSX.Element;
};
const DashboardTemplate: React.FC<Props> = ({ children }) => {
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={isDark ? ThemeDark : ThemeLight}>
      <>
        <GlobalStyles />
        <button onClick={() => dispatch(changeTheme())}> cambiar </button>
        <div> header {children} footer </div>
      </>
    </ThemeProvider>
  );
};
export default DashboardTemplate;
