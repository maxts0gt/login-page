import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ForgotPassword,
  Login,
  Home,
  NotFound,
  Help,
  Privacy,
  Terms,
} from "./pages";
import styles from "./App.module.css";
import { useTheme } from "./contexts/useTheme";
import { routes } from "./constants";
import { AuthProvider } from "./contexts/useAuth";
import { LanguageProvider } from "./contexts/useLanguage";
import Layout from "./components/common/Layout";

function App() {
  const { theme } = useTheme();
  return (
    <AuthProvider>
      <LanguageProvider>
        <div data-theme={theme} className={styles.app}>
          <Router>
            <Layout>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.login} element={<Login />} />
                <Route
                  path={routes.forgotPassword}
                  element={<ForgotPassword />}
                />
                <Route path={routes.help} element={<Help />} />
                <Route path={routes.privacy} element={<Privacy />} />
                <Route path={routes.terms} element={<Terms />} />
              </Routes>
            </Layout>
          </Router>
        </div>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
