import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-slate-200 px-4 py-2">
      <h2>Footer</h2>
      <Image src="/flags/ph.svg" alt="Philippines" width={50} height={50} />
    </footer>
  );
};

export default Footer;
