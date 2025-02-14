import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen  w-full">
      <Header />
      <main className="min-h-screen w-full max-w-1440px flex flex-col px-4 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
