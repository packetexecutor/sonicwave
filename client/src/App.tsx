import { Switch, Route, useLocation } from "wouter";
import { useHashLocation } from "./lib/hashLocation";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
-1
+4
import Home from "@/pages/Home";
function Router() {
  
  const [location, setLocation] = useHashLocation();
  
  return (
    <Switch location={location} matcher={(a, b) => a === b}>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
