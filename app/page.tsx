"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <a className="landing-mark" href="/" aria-label="TMF home"><Image src="/TMF%20logo.PNG" alt="TMF" width={42} height={18} /><span>®</span></a>
        <nav aria-label="Main navigation"><a href="/album">Album</a><a href="/shows">Shows</a><a href="/contact">Contact</a><a href="/merch">Merch</a></nav>
      </header>
      <section className="landing-hero" aria-labelledby="landing-caption">
        <div className="landing-logo-wrap">
          <Image src="/TMF%20logo2.png" alt="TMF logo" width={1200} height={800} priority className="landing-logo" />
        </div>
        <p id="landing-caption">southwest emo!</p>
      </section>
    </main>
  );
}
