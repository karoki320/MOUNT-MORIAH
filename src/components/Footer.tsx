import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-500 font-heading font-bold text-lg">
              MM
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm leading-tight">Mount Moriah</div>
              <div className="text-xs text-secondary-400 tracking-wide leading-tight">INTERNATIONAL CHRISTIAN SCHOOL</div>
            </div>
          </div>
          <p className="text-primary-200 text-sm leading-relaxed">
            Nurturing minds, building character, and cultivating faith for a generation of excellent leaders grounded in Christian values.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-primary-700 hover:bg-secondary-500 flex items-center justify-center transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-primary-700 hover:bg-secondary-500 flex items-center justify-center transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-primary-700 hover:bg-secondary-500 flex items-center justify-center transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4 text-secondary-400">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-200">
            {[
              { label: 'About the School', to: '/about' },
              { label: 'Admissions', to: '/admissions' },
              { label: 'Academics', to: '/academics' },
              { label: 'Photo Gallery', to: '/gallery' },
              { label: 'Events Calendar', to: '/about#events' },
              { label: 'Contact Us', to: '/contact' },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-secondary-400 transition-colors flex items-center gap-2">
                  <span className="text-secondary-500">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4 text-secondary-400">Academics</h4>
          <ul className="space-y-2 text-sm text-primary-200">
            {[
              { label: 'Early Childhood (PP1–PP2)', to: '/admissions#early' },
              { label: 'Primary (Grade 1–6)', to: '/admissions#primary' },
              { label: 'Junior Secondary (Grade 7–9)', to: '/admissions#secondary' },
              { label: 'CBC Curriculum', to: '/academics#cbc' },
              { label: 'Co-curricular Activities', to: '/academics#cocurricular' },
              { label: 'Fee Structure', to: '/about#fees' },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-secondary-400 transition-colors flex items-center gap-2">
                  <span className="text-secondary-500">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4 text-secondary-400">Contact Information</h4>
          <ul className="space-y-3 text-sm text-primary-200">
            <li className="flex items-start gap-3">
              <Phone size={15} className="mt-0.5 text-secondary-400 shrink-0" />
              <div>
                <a href="tel:+254700000000" className="hover:text-white transition-colors block">+254 700 000 000</a>
                <a href="tel:+254711000000" className="hover:text-white transition-colors block">+254 711 000 000</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={15} className="mt-0.5 text-secondary-400 shrink-0" />
              <a href="mailto:info@mountmoriah.ac.ke" className="hover:text-white transition-colors">
                info@mountmoriah.ac.ke
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 text-secondary-400 shrink-0" />
              <span>Mount Moriah Rd, Nairobi, Kenya</span>
            </li>
          </ul>
          <div className="mt-5">
            <h5 className="text-sm font-semibold text-secondary-400 mb-2">School Hours</h5>
            <p className="text-xs text-primary-300">Mon – Fri: 7:00 AM – 4:00 PM</p>
            <p className="text-xs text-primary-300">Sat: 8:00 AM – 12:00 PM (remedial)</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-400">
          <p>© {new Date().getFullYear()} Mount Moriah International Christian School. All Rights Reserved.</p>
          <p>Built with faith &amp; excellence.</p>
        </div>
      </div>
    </footer>
  )
}
