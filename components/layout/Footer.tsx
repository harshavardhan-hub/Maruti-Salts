import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-mineral text-bg py-16 px-6 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="/logo.png" 
              alt="Maruti Salts Logo" 
              className="h-8 w-auto object-contain" 
            />
            <span className="font-display text-xl tracking-wide font-medium">Maruti Salts</span>
          </div>
          <p className="text-bg/70 text-sm font-display italic text-lg leading-relaxed mb-6">
            Born from Earth. Refined by Time.
          </p>
          <address className="text-bg/60 text-sm leading-relaxed not-italic">
            Plot No. 124 & 125, Food Processing Park<br />
            Jaggakhedi Industrial Area<br />
            Mandsaur, Madhya Pradesh - 458001<br />
            India
          </address>
        </div>
        
        <div>
          <h4 className="font-display text-lg mb-6 text-white">Products</h4>
          <ul className="space-y-4 text-sm text-bg/70">
            <li><Link href="/products" className="hover:text-accent transition-colors">Black Salt (Kala Namak)</Link></li>
            <li><Link href="/products" className="hover:text-accent transition-colors">Rock Salt (Sendha Namak)</Link></li>
            <li><Link href="/products" className="hover:text-accent transition-colors">Export Grade</Link></li>
            <li><Link href="/products" className="hover:text-accent transition-colors">Bulk Orders</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 text-white">Company</h4>
          <ul className="space-y-4 text-sm text-bg/70">
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/team" className="hover:text-accent transition-colors">Team</Link></li>
            <li><Link href="/quality" className="hover:text-accent transition-colors">Process & Quality</Link></li>
            <li><Link href="/quality" className="hover:text-accent transition-colors">Certifications</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-bg/70">
            <li>marutitradersmandsaur@gmail.com</li>
            <li>+91 9479366658</li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Request a Quote</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-bg/50">
        <p>&copy; {new Date().getFullYear()} Maruti Salts. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>marutisalts.com</span>
          <span>FSSAI Certified</span>
        </div>
      </div>
    </footer>
  );
}
