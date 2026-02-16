'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Jersey_10 } from "next/font/google";

const jersey_10 = Jersey_10({
  subsets: ['latin'],
  weight: ['400']
});

export default function Home() {
  const [ navItems, setNavItems ] = useState([
    {
      id: 1,
      title: 'For you'
    },
    {
      id: 2,
      title: 'Profile'
    },
    {
      id: 3,
      title: 'Notifications'
    },
    {
      id: 4,
      title: 'Search'
    },
    {
      id: 5,
      title: 'Support'
    }
  ]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <nav className={styles.nav_bar}>
          { navItems.map((item, index) => {
              return <div key={item.id} className={jersey_10.className}>
                {item.title}
              </div>
          })}
        </nav>

        <section className={styles.main_body}>

        </section>
      </main>
    </div>
  );
}
