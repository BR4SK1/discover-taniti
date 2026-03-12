import { Link } from 'react-router-dom';
import { Palmtree, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Palmtree className="h-6 w-6" />
              <span>Discover Taniti</span>
            </Link>
            <p className="text-gray-300 text-sm max-w-md">
              Experience the beauty of Taniti - a tropical paradise in the Pacific. 
              From pristine beaches to lush rainforests and an active volcano, 
              adventure awaits around every corner.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link to="/island-info" className="hover:text-white transition-colors">Island Info</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book Your Trip</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Yellow Leaf Bay, Taniti</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@discovertaniti.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) TANITI</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Taniti Tourism Board. All rights reserved.</p>
          <p className="mt-1">This is a demo website for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
