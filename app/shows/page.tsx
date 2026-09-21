import Image from "next/image";

export const dynamic = "force-dynamic";

const fallbackShows = [
  { date: "9.19.26", city: "Albuquerque", venue: "Bands of Enchantment 2026", ticketUrl: "https://www.bandsofenchantment.com/festival-rsvp" },
  { date: "9.20.26", city: "Albuquerque", venue: "Bobfest - Launchpad", ticketUrl: "https://tickets.holdmyticket.com/tickets/465160" },
  { date: "11.04.26", city: "Albuquerque", venue: "Backstage - Revel", ticketUrl: "https://www.etix.com/ticket/p/38939260/harrison-gordon-albuquerque-backstage-at-revel?partner_id=100" },
];

type BandsintownOffer = {
  type?: string;
  url?: string;
};

type BandsintownEvent = {
  datetime?: string;
  date?: string;
  url?: string;
  ticket_url?: string;
  venue?: {
    city?: string;
    name?: string;
  };
  offers?: BandsintownOffer[];
};

type Show = { date: string; city: string; venue: string; ticketUrl?: string };

const bandsintownArtists = ["15661749", "Thursday%20Marks%20Fall"];

function formatShowDate(value: string) {
  const date = value.slice(0, 10).split("-");
  if (date.length !== 3) return value;

  return `${Number(date[1])}.${date[2]}.${date[0].slice(-2)}`;
}

// Ticket offer link if valid, otherwise fall back to the Bandsintown event page.
function getShowUrl(event: BandsintownEvent) {
  return event.offers?.[0]?.url || event.url || event.ticket_url;
}

async function getShows(): Promise<Show[]> {
  const apiKey = process.env.BANDSINTOWN_API_KEY;
  if (!apiKey) return fallbackShows;

  try {
    let events: BandsintownEvent[] = [];
    for (const artist of bandsintownArtists) {
      const response = await fetch(`https://rest.bandsintown.com/artists/${artist}/events?date=upcoming&app_id=${encodeURIComponent(apiKey)}`, { cache: "no-store" });
      if (response.ok) {
        events = (await response.json()) as BandsintownEvent[];
        if (events.length > 0) break;
      }
    }

    const shows = events
      .filter((event) => event.venue?.city && event.venue?.name && (event.datetime || event.date))
      .sort((first, second) => (first.datetime ?? first.date ?? "").localeCompare(second.datetime ?? second.date ?? ""))
      .map((event) => ({
        date: formatShowDate(event.datetime ?? event.date ?? ""),
        city: event.venue?.city ?? "",
        venue: event.venue?.name ?? "",
        ticketUrl: getShowUrl(event),
      }));

    return shows.length > 0 ? shows : fallbackShows;
  } catch {
    return fallbackShows;
  }
}

export default async function ShowsPage() {
  const shows = await getShows();

  return (
    <main className="shows-page">
      <header className="shows-nav">
        <a className="nav-mark" href="/" aria-label="Thursday Marks Fall home"><Image src="/TMF%20logo.PNG" alt="TMF" width={42} height={18} /><span>®</span></a>
        <nav aria-label="Page navigation"><a href="/album">Album</a><a href="/contact">Contact</a><a href="/merch">Merch</a></nav>
        <a href="/">Home <span className="ui-arrow" aria-hidden="true" /></a>
      </header>
      <section className="shows-page-content" aria-labelledby="shows-page-title">
        <h1 id="shows-page-title"><i>LIVE DATES</i></h1>
        <div className="shows-page-list">
          {shows.map((show, index) => show.ticketUrl ? <a className="show-row" href={show.ticketUrl} target="_blank" rel="noopener noreferrer" key={`${show.date}-${show.city}-${show.venue}-${index}`}><time>{show.date}</time><strong>{show.city}</strong><span>{show.venue}</span><b className="ui-arrow" aria-hidden="true" /></a> : <div className="show-row" key={`${show.date}-${show.city}-${show.venue}-${index}`}><time>{show.date}</time><strong>{show.city}</strong><span>{show.venue}</span><b className="ui-arrow" aria-hidden="true" /></div>)}
        </div>
      </section>
    </main>
  );
}