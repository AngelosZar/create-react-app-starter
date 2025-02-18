import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full max-w-1440px flex flex-col px-4 mx-auto flex-grow min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
