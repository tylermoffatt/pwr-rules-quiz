//RootLayout

import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-900 font-Quicksand text-white">
      <body className="min-h-screen">
        <div className="min-h-screen flex flex-col items-center px-2 py-8">
          <main className="w-full max-w-6xl flex-grow rounded-md border border-gray-700 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}