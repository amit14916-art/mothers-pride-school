import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mother's Pride School | Future-Ready AI & coding Academy",
  description: "Mother's Pride School is a premier academic institution offering a futuristic high-tech coding curriculum, Python scripting, STEM Robotics, smart classrooms, and expert faculty.",
  keywords: "school, high-tech academy, coding, artificial intelligence, robotics, STEM, New Delhi",
  authors: [{ name: "Mother's Pride Academic Board" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-academic-gold selection:text-academic-navy">
        {/* Responsive Navbar */}
        <Navbar />

        {/* Global Page Content Container */}
        <main className="flex-grow flex flex-col pt-20 sm:pt-24 min-h-[calc(100vh-250px)]">
          {children}
        </main>

        {/* Detailed School Footer */}
        <Footer />
      </body>
    </html>
  );
}
