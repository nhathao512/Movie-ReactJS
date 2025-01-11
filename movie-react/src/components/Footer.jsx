const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center border-t border-gray-800">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} HAFO Movie. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-gray-400 hover:text-red-700">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-red-700">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-red-700">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
