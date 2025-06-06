
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ResearchHighlights from "./pages/ResearchHighlights";
import ResearchCenters from "./pages/ResearchCenters";
import Publications from "./pages/Publications";
import Innovations from "./pages/Innovations";
import StartUp from "./pages/StartUp";
import FundedProjects from "./pages/FundedProjects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research/highlights" element={<ResearchHighlights />} />
          <Route path="/research/centers" element={<ResearchCenters />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/innovations" element={<Innovations />} />
          <Route path="/research/startup" element={<StartUp />} />
          <Route path="/research/funded-projects" element={<FundedProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
