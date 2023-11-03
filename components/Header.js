import Link from 'next/link';

export default function Header({ name, subtitle }) {
  return (
    <header className="pt-20 pb-12">
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <h1 className="text-2xl dark:text-white text-center">{name}</h1>
      <p className="font-light">{subtitle}</p>
    </header>
  );
}
