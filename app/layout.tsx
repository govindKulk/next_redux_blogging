/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import { Suspense } from "react";
import Loading from "./components/Posts/loading";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />



            <main className={styles.main}>

              {props.children}


              </main>

     
          </section>
        </body>
      </html>
    </Providers>
  );
}
