import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-slate-900 p-6">
        <div className="max-w-xl mx-auto space-y-14 w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
