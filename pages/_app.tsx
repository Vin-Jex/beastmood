import Header from "@/components/Atoms/Header";
import { FormProvider } from "@/context/Form/CreateAccountProvider";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Poppins, Lato, Montserrat, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <FormProvider>
        <main className={`${poppins.variable} ${montserrat.variable} ${inter.variable}`}>
          <Component {...pageProps} />
        </main>
      </FormProvider>
    </ThemeProvider>
  );
}
