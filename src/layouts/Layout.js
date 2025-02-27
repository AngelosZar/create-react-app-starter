import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full max-w-1440px flex flex-col mx-auto flex-grow min-h-screen bg-slate-50">
        {children}
      </main>
      <Footer />
    </>
  );
}
