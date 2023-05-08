import Header from "@/components/Atoms/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='fixed top-0 right-0 z-30 w-full'>
        <Header />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
