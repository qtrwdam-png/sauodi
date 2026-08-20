/**
 * فلسفة التطبيق: توجيه كامل لمتجر Masheed Gate العربي مع ترويسة وتذييل موحدين،
 * واستجابة مطابقة للمرجع دون قوالب أو مسارات مؤقتة.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StoreProvider } from "@/contexts/StoreContext";
import AuthPage from "@/pages/AuthPage";
import CartPage from "@/pages/CartPage";
import CategoryPage from "@/pages/CategoryPage";
import CheckoutPage from "@/pages/CheckoutPage";
import Home from "@/pages/Home";
import InfoPage from "@/pages/InfoPage";
import MarketplacePage from "@/pages/MarketplacePage";
import NotFound from "@/pages/NotFound";
import OrderSuccessPage from "@/pages/OrderSuccessPage";
import ProductPage from "@/pages/ProductPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/categories/:slug" component={CategoryPage} />
      <Route path="/product/:slug" component={ProductPage} />
      <Route path="/checkout/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/order-success" component={OrderSuccessPage} />
      <Route path="/customer/login">{() => <AuthPage mode="login" />}</Route>
      <Route path="/customer/register">{() => <AuthPage mode="register" />}</Route>
      <Route path="/customer/forgot-password">{() => <AuthPage mode="forgot" />}</Route>
      <Route path="/marketplace" component={MarketplacePage} />
      <Route path="/about" component={InfoPage} />
      <Route path="/contact" component={InfoPage} />
      <Route path="/faq" component={InfoPage} />
      <Route path="/terms" component={InfoPage} />
      <Route path="/returns" component={InfoPage} />
      <Route path="/privacy" component={InfoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <StoreProvider>
            <Toaster position="top-center" richColors />
            <Router />
          </StoreProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
