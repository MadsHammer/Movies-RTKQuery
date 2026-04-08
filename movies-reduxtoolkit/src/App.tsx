import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <header className="p-4 text-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500">MADS MOVIES</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="p-10 text-center text-gray-600">
        © 2026 - Mads Hammerly Udvikling
      </footer>
    </div>
  );
}

export default App;