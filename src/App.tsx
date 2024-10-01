import { GlobalStyles } from "./configs/global/GlobalStyles";
import { AppRoutes } from "./routes/AppRoutes";
import { LightTheme } from "./configs/theme/LightTheme";

export function App() {
  return (
    <LightTheme>
      <GlobalStyles />
      <AppRoutes />
    </LightTheme>
  );
}
