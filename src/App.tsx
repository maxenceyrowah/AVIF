import { SpeedInsights } from "@vercel/speed-insights/react";
import Routes from "./routes";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes />
      <SpeedInsights />
    </div>
  );
};

export default App;
