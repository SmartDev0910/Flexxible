import { ReactNode } from "react";

import '@/styles/globals.css';
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Flexibble',
  description: 'Design selling platform',
}

export default function RootLayout({
  children,
  modal
}: {
  children: ReactNode,
  modal: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="favicon_white.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="favicon.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
      </head>

      <body>
        <Provider>
          <Navbar />
          {children}
          {modal}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
