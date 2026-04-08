import { Link } from "react-router-dom";

export function Navbar() {
  // Accessing global user data from the root loader

  return (
    <nav className="bg-secondary/80 backdrop-blur-md border-b border-white/5 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand - Using Accent color for the name */}

        <Link
          className="text-xl font-bold text-white hover:text-accent no-underline transition-colors"
          to="/"
        >
          Mads' Movies'
        </Link>

        
      </div>
    </nav>
  );
}
