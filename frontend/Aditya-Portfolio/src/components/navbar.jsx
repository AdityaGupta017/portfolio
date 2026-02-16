import * as React from 'react';

const pages = ['About', 'Projects', 'Experience', 'Contact'];

function ResponsiveAppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {pages.map((page) => (
              <a
                key={page}
                href={`#${page.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {page}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            {pages.map((page) => (
              <a
                key={page}
                href={`#${page.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {page}
              </a>
            ))}
            <button className="mt-4 w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold">
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default ResponsiveAppBar;