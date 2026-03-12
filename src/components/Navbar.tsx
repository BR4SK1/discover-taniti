import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palmtree } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/island-info', label: 'Island Info' },
  { href: '/book', label: 'Book Now' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <Palmtree className="h-6 w-6" />
              <span>Discover Taniti</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  location.pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <div className="px-4 py-2 space-y-1 bg-white border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'block px-4 py-3 rounded-md text-base font-medium transition-colors',
                location.pathname === link.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-secondary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
