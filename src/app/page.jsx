  import Image from "next/image";
  import styles from "./page.module.css";

  import Posts from "@/components/posts/posts";
  import NavBar from "@/components/molecules/navBar/navBar";
  import SkeletonPost from "@/components/skeletons/skeletonPost/skeletonPost";

  import { Suspense } from "react";

  import { Jersey_10 } from "next/font/google";

  const jersey_10 = Jersey_10({
      subsets: ['latin'],
      weight: ['400']
  });

  export default function Home() {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <NavBar />

          <section className={styles.main_body}>
              <h2 id={styles.page_title} className={jersey_10.className}> For you </h2>

              <Suspense fallback={ <SkeletonPost /> }>
                <div className={styles.posts_box}>
                  <Posts />
                </div>
              </Suspense>
          </section> 
        </main>
      </div>
    );
  }
