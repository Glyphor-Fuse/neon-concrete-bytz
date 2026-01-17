import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <div className="antialiased bg-zinc-950 text-zinc-50 selection:bg-zinc-50 selection:text-zinc-950 min-h-screen flex flex-col">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;