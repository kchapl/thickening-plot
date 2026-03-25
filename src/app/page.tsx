import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={styles.logoText}>Thickening Plot</div>
        <nav className={styles.nav}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className={styles.hero}>
        <div className={styles.heroSub}>STORYTELLING REIMAGINED</div>
        <h1 className={styles.heroTitle}>The mystery deepens...</h1>
        <p className={styles.heroDesc}>
          Step into a world of complex narratives, where every detail matters and the plot never stops thickening. A modern platform for stories that matter.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary}>Start Writing</button>
          <button className={styles.btnSecondary}>Explore Stories</button>
        </div>
      </main>

      {/* Features Grid */}
      <section className={styles.grid} id="features">
        <div className={`${styles.card} glass`}>
          <h2 className={styles.cardTitle}>Recursive Narrative</h2>
          <p className={styles.cardDesc}>
            Our platform supports multi-layered stories with deep branching paths and context-aware elements.
          </p>
        </div>
        <div className={`${styles.card} glass`}>
          <h2 className={styles.cardTitle}>Collaborative Worldbuilding</h2>
          <p className={styles.cardDesc}>
            Write together in real-time with automatic versioning and conflict resolution for every story beat.
          </p>
        </div>
        <div className={`${styles.card} glass`}>
          <h2 className={styles.cardTitle}>Dynamic Characters</h2>
          <p className={styles.cardDesc}>
            AI-enhanced character tracking ensures consistency and depth as your cast grows.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 24px', textAlign: 'center', opacity: 0.5 }}>
        <p>© 2026 Thickening Plot. All rights reserved.</p>
      </footer>
    </div>
  );
}
