mport { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
// Hàm tiện ích để kiểm tra vị trí hiện tại của URL hash
const useHashLocation = (): [string, (to: string) => void] => {
  const getHash = () => window.location.hash.replace(/^#/, "") || "/";
  const [loc, setLoc] = React.useState(getHash());
  
  React.useEffect(() => {
