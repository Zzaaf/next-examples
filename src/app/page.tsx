"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const currentYear = new Date()

export default function Home() {
  const [year, setYear] = useState(1995);

  useEffect(() => {
    const interval = setInterval(() => {
      setYear((prevYear) => prevYear + 1);
    }, 100);

    if (year === Number(currentYear.getFullYear())) {
      clearInterval(interval)
    }

    return () => clearInterval(interval);
  }, [year]);

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>{year === 2024 ? 'Great Sapfy!' : year}</h1>
    </main>
  );
}
