"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const releasedTracks = [
  { title: "SIN COS AND TAN", runtime: "4:10", id: "track-sin-cos-and-tan" },
  { title: "THERAPY AT THE MOSH PIT", runtime: "4:59", id: "track-therapy-at-the-mosh-pit" },
  { title: "HOW COULD I KNOW?", runtime: "2:05", id: "track-how-could-i-know" },
  { title: "BUT YESTERDAY", runtime: "2:49", id: "track-but-yesterday" },
  { title: "WISTERIA", runtime: "5:32", id: "track-wisteria" },
];

const mysteryTracks = [
  { title: "???", runtime: "2:56", id: "mystery-track-1" },
  { title: "???", runtime: "4:04", id: "mystery-track-2" },
  { title: "???", runtime: "3:15", id: "mystery-track-3" },
  { title: "???", runtime: "5:31", id: "mystery-track-4" },
  { title: "???", runtime: "3:52", id: "mystery-track-5" },
];

export default function AlbumPage() {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.to(".album-art", { rotation: 8, scale: 1.08, scrollTrigger: { trigger: ".album-layout", start: "top bottom", end: "bottom top", scrub: 1 } });
    }, page);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef} className="album-page">
      <header className="album-nav">
        <a className="nav-mark" href="/" aria-label="Thursday Marks Fall home"><Image src="/TMF%20logo.PNG" alt="TMF" width={42} height={18} /><span>®</span></a>
        <nav aria-label="Page navigation"><a href="/shows">Shows</a><a href="/contact">Contact</a><a href="/merch">Merch</a></nav>
        <a href="/">Home <span className="ui-arrow" aria-hidden="true" /></a>
      </header>
      <div className="album-releases">
        <section className="album-layout" aria-labelledby="album-title">
          <div className="album-art-wrap"><Image src="/tmbttb.png" alt="Take Me Back to the Beginning EP artwork" width={720} height={720} className="album-art" /></div>
          <div className="album-details">
            <p className="release-label">TAKE ME BACK TO THE BEGINNING — 2024</p>
            <h1 id="album-title">OUT NOW</h1>
            <p className="track-heading">Track list</p>
            <ol className="album-track-list">
              {releasedTracks.map((track, index) => <li id={track.id} key={track.id}><span>0{index + 1}</span><strong>{track.title}</strong><time>{track.runtime}</time></li>)}
            </ol>
            <div className="stream-links"><a href="https://open.spotify.com/artist/2TwbJ8YwFBLnJGAxhtAiN6?si=zAfG40AkRWuxVMNZjYIkJw" target="_blank" rel="noopener noreferrer">Spotify <span className="ui-arrow" aria-hidden="true" /></a><a href="https://www.google.com/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://music.apple.com/us/artist/thursday-marks-fall/1667062244&amp;ved=2ahUKEwjQp8-Q3PGWAxUxkysGHV-kHoYQFnoECBkQAQ&amp;usg=AOvVaw3ECjYeBUT6VjP5x7vxmx20" target="_blank" rel="noopener noreferrer">Apple Music <span className="ui-arrow" aria-hidden="true" /></a><a href="https://thursdaymarksfall.bandcamp.com/album/take-me-back-to-the-beginning-2" target="_blank" rel="noopener noreferrer">Bandcamp <span className="ui-arrow" aria-hidden="true" /></a></div>
          </div>
        </section>
        <section className="album-layout" aria-labelledby="mystery-album-title">
          <div className="album-art-wrap"><div className="album-art album-art-placeholder" aria-hidden="true" /></div>
          <div className="album-details">
            <p className="release-label">TMF — ????? / ????</p>
            <h1 id="mystery-album-title">COMING SOON</h1>
            <p className="track-heading">Track list</p>
            <ol className="album-track-list">
              {mysteryTracks.map((track, index) => <li id={track.id} key={track.id}><span>0{index + 1}</span><strong>{track.title}</strong><time>{track.runtime}</time></li>)}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}