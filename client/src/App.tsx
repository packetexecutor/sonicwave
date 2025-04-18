import * as React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Hàm tiện ích để kiểm tra vị trí hiện tại của URL hash
const useHashLocation = (): [string, (to: string) => void] => {
  const getHash = () => window.location.hash.replace(/^#/, "") || "/";
  const [loc, setLoc] = React.useState(getHash());
  
  React.useEffect(() => {
    const handler = () => setLoc(getHash());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  
  const navigate = React.useCallback((to: string) => {
    window.location.hash = to;
  }, []);
  
  return [loc, navigate];
};

function Router() {
  // Sử dụng hook location dựa trên hash cho GitHub Pages
  const [location, navigate] = useHashLocation();
  
  return (
    <Switch location={location}>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
