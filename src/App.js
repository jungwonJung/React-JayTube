import { Outlet } from "react-router-dom";
import SerachHeader from "./components/SerachHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JaytubeApiProvider } from "./context/JaytubeApiContext";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <SerachHeader />
      <JaytubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </JaytubeApiProvider>
    </div>
  );
}

export default App;
