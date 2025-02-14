import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen  w-full">
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
}
