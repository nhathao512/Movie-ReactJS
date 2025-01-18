const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center border-t border-gray-800">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} HAFO Movie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
