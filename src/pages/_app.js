// src/pages/_app.js
// ...
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// src/pages/_app.js
import '../styles/globals.css'; // This path must be correct
// ... rest of your _app.js file
// ...

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* ... Head ... */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24"> {/* Padding to offset fixed navbar */}
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default MyApp;