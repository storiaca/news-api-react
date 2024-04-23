const date = new Date();
let year = date.getFullYear();
function Footer() {
  return (
    <footer className="py-5 bg-stone-800">
      <p className="text-center text-white text-xl">
        News API React &copy; {year}
      </p>
    </footer>
  );
}

export default Footer;
