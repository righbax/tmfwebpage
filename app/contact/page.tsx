import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-nav">
        <a className="nav-mark" href="/" aria-label="Thursday Marks Fall home"><Image src="/TMF%20logo.PNG" alt="TMF" width={42} height={18} /><span>®</span></a>
        <nav aria-label="Page navigation"><a href="/album">Album</a><a href="/shows">Shows</a><a href="/merch">Merch</a></nav>
        <a href="/">Home ↗</a>
      </header>
      <section className="contact-page-content" aria-labelledby="contact-page-title">
        <div className="section-kicker">Booking / General</div>
        <h1 id="contact-page-title"><span className="contact-word-come">COME</span><br /><i>AROUND</i></h1>
        <div className="contact-page-links">
          <a href="mailto:thursdaymarksfall505@gmail.com"><span>Email Us</span><small>thursdaymarksfall505@gmail.com</small><b>↗</b></a>
          <a href="https://www.instagram.com/thursdaymarksfall" rel="noreferrer" target="_blank"><span>Instagram</span><small>thursdaymarksfall</small><b>↗</b></a>
          <a href="https://linktr.ee/thursdaymarksfall" rel="noreferrer" target="_blank"><span>All Links</span><small>All Links</small><b>↗</b></a>
        </div>
        <div className="contact-page-divider" />
      </section>
    </main>
  );
}