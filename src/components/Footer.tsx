export default function Footer() {
  return (
    <footer className="bg-[#0b0c2a] text-white py-16">
    <div className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-12 px-8 text-sm">  
        <div>
          <h4 className="font-semibold mb-3">About Auziros</h4>
          <ul className="space-y-2">
            <li>Company Info</li>
            <li>Sustainability</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Media Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Policies</h4>
          <ul className="space-y-2">
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">More</h4>
          <ul className="space-y-2">
            <li>Rewards</li>
            <li>Flights</li>
            <li>Hotel Deals</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
