import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.tsx";
 
import ResearchCenters from "./pages/ResearchCenters.tsx";
import Publications from "./pages/Publications.tsx";
import Innovations from "./pages/Innovations.tsx";
import StartUp from "./pages/StartUp.tsx";
import FundedProjects from "./pages/FundedProjects.tsx";
import NotFound from "./pages/NotFound.tsx";
 import Archives from "./pages/Archives.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research/highlights" element={<Index/>} />
          <Route path="/research/centers" element={<ResearchCenters />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/innovations" element={<Innovations />} />
          <Route path="/research/startup" element={<StartUp />} />
          <Route path="/research/funded-projects" element={<FundedProjects />} />
       <Route path="/publication/archives" element={<Archives/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
