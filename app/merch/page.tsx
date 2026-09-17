import Image from "next/image";

export default function MerchPage() {
  return (
    <main className="merch-page">
      <header className="merch-nav">
        <a className="nav-mark" href="/" aria-label="Thursday Marks Fall home"><Image src="/TMF%20logo.PNG" alt="TMF" width={42} height={18} /><span>®</span></a>
        <nav aria-label="Page navigation"><a href="/album">Album</a><a href="/shows">Shows</a><a href="/contact">Contact</a></nav>
        <a href="/">Home <span className="ui-arrow" aria-hidden="true" /></a>
      </header>
      <section className="merch-coming-soon" aria-labelledby="merch-title">
        <h1 id="merch-title">NO MERCH YET LOL</h1>
      </section>
    </main>
  );
}