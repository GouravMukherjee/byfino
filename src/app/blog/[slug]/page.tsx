import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/ui/Eyebrow";
import { posts } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | The Fino Journal`,
    description: post.excerpt,
    alternates: { canonical: `https://byfino.com/blog/${post.slug}` },
  };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Blog post content map
const postContent: Record<string, string[]> = {
  "how-to-choose-bespoke-wedding-suit-bay-area": [
    "Choosing a bespoke wedding suit in the Bay Area is one of the most significant style decisions you'll make. Unlike buying off the rack or even made-to-measure, bespoke gives you a garment built from scratch — for your body, your occasion, and your vision.",
    "The Bay Area presents specific considerations. Weddings range from vineyard ceremonies in Napa to rooftop galas in San Francisco to intimate estate gatherings in Los Gatos and Saratoga. The climate varies — from foggy coastal mornings to warm, dry afternoon heat inland.",
    "Start with the date. Work backwards. If your wedding is in summer, you want lightweight wool or a linen blend — fabrics that breathe without losing structure. A cool-weather wedding opens the door to flannel, heavier wools, and richer textures that photograph beautifully in the golden-hour light of autumn.",
    "Fabric is not just aesthetic — it's practical. The suit you wear in 400 photographs needs to look as good at 9 PM as it did at noon. That means quality canvas construction, a fabric with natural recovery, and a cut that moves with you.",
    "On lead time: the Bay Area has several excellent bespoke tailors, but wait times vary. At Fino, we recommend starting 3–4 months before your date. This gives time for fabric selection, the initial fitting, refinements, and final delivery with room to breathe.",
    "Groomsmen coordination is often overlooked until too late. We handle each groomsman individually — every measurement taken fresh, every suit tailored to that person. The result is a group that looks unified without anyone looking like they borrowed someone else's suit.",
  ],
  "what-does-a-custom-suit-cost": [
    "The question we get most often — and the one that deserves a straight answer.",
    "A custom suit from Fino starts at $2,400. That covers the full bespoke process: consultation, fabric selection from our library of heritage mills, all measurements, canvas construction, fittings, and final delivery.",
    "What drives price upward? Fabric is the primary variable. A Super 150s Loro Piana will cost more than a standard wool. Cashmere blends, vicuña touches, or exotic materials add to that. The garment type matters too — a two-piece suit is one investment; a three-piece or a tuxedo is another.",
    "What stays constant regardless of price: the process. Thirty-plus measurements. Hand-padded canvas. Individual pattern drafting. These are non-negotiables at Fino.",
    "To compare: off-the-rack suits from quality brands run $400–$1,200 but cannot account for your individual body. Made-to-measure starts from an existing block, adjusted — typically $800–$2,000. Bespoke begins from nothing, giving you the only suit in the world made exactly for you.",
    "The honest answer is that a bespoke suit is an investment — not in fashion, but in a garment you'll wear for 20 years. The math changes when you frame it that way.",
  ],
  "bespoke-vs-made-to-measure": [
    "The distinction matters more than most people realize — and the industry doesn't always clarify it.",
    "Made-to-measure (MTM) begins with a block pattern — a standard template in your approximate size — that is then adjusted to your measurements. The adjustments improve the fit significantly over off-the-rack, but the underlying structure of the garment remains templated.",
    "Bespoke begins with nothing. Your measurements are taken — all 30-plus of them — and a unique pattern is drafted specifically for your body, posture, and proportions. No template. No starting point other than you.",
    "The difference shows in complex body shapes: sloped shoulders, asymmetrical builds, forward posture, low seat. These are the things a template cannot accommodate. A bespoke pattern handles them naturally because it was never drawn around anyone else.",
    "There is also a difference in construction. True bespoke uses floating canvas — layers of horsehair canvas hand-stitched to the chest, giving the jacket a natural drape that conforms to your body over time. Most MTM and all fused suits use glued interlining that eventually separates, bubbles, or stiffens.",
    "At Fino, we offer both approaches and are honest about when each makes sense. For straightforward builds with clear timelines, MTM can be the right answer. For weddings, complex builds, or clients who want the full experience, bespoke is the standard.",
  ],
  "best-fabrics-for-california-wedding": [
    "California weddings are unique. The light is extraordinary, the venues are diverse, and the climate — depending on where and when — can shift dramatically over the course of a day.",
    "For summer and early fall weddings, particularly in the Bay Area and wine country, lightweight wool is your best friend. A Super 120s or Super 130s in a fresco or tropical weave breathes, drapes beautifully, and recovers from movement without wrinkling. Dormeuil's summer range and Holland & Sherry's fresco offerings are benchmarks here.",
    "Linen blends — particularly a wool-linen mix — offer a relaxed, textured aesthetic that reads as intentional rather than casual. They suit outdoor ceremonies and vineyard settings perfectly. The trade-off is that pure linen wrinkles. Blends manage this better.",
    "For coastal and Bay Area venues with more moderate temperatures, a medium-weight wool in 10–11oz is the all-purpose choice. Loro Piana's year-round collection is exactly this — versatile enough to span seasons, luxurious enough to justify bespoke.",
    "For winter or indoor evening weddings, heavier wools and flannel enter the picture. Fox Flannel has a warmth and richness that photographs beautifully under evening light. A velvet lapel or midnight navy tuxedo from Dormeuil creates a look that's unmistakably considered.",
    "The one universal rule: avoid synthetics. Polyester traps heat, doesn't breathe, and photographs with a plastic sheen. On a day when you're in 400 photographs, natural fibers are non-negotiable.",
  ],
  "how-to-dress-for-silicon-valley-gala": [
    "Silicon Valley has its own relationship with formal dress. The culture prizes substance over show — and yet the gala circuit here is real, frequent, and high-stakes. Charity events, company milestone celebrations, industry dinners: they happen every quarter.",
    "The mistake most men make is defaulting to rental. A rented tuxedo doesn't fit, doesn't reflect who you are, and often arrives in questionable condition. The men who stand out at these events are the ones whose suits were clearly made for them.",
    "Black tie, technically, means tuxedo. A classic Dormeuil midnight navy or black two-piece with a grosgrain lapel, white dress shirt, and black bow tie is the correct interpretation — and it never fails. Midnight navy photographs better than true black under artificial light.",
    "Creative black tie allows more latitude. A velvet smoking jacket, a textured midnight blazer, or a single-button shawl lapel tuxedo can all work. The key is intention — it should be clear the choices were deliberate, not accidental.",
    "For events labeled 'business formal' or 'smart attire,' a well-cut dark suit in charcoal, navy, or a subtle chalk stripe is appropriate. This is where Loro Piana Super 150s earns its reputation — the fabric drapes and moves beautifully through a long evening.",
    "One piece of advice we give every client before a gala: wear the suit a few days before the event. Not to break it in — bespoke suits don't need breaking in. But to confirm it feels exactly right, so on the night, you're not thinking about the suit at all.",
  ],
  "loro-piana-vs-dormeuil": [
    "Two names that define the top end of suit fabric. Both Italian and English heritage mills with centuries of craft. Which one belongs in your next suit?",
    "Loro Piana is the luxury benchmark. Based in Biella in northern Italy, they control their supply chain from the raw fiber to the finished cloth — including vicuña sourcing in South America and cashmere from Inner Mongolia. Their Super 150s to Super 180s represent the finest wools available for everyday suiting. The hand — the way the fabric feels against your palm — is unmistakable: silky, warm, with natural weight.",
    "Dormeuil operates differently. Founded in 1842 and based in Paris with mills in Yorkshire, their strength is in technical and heritage fabrics. The Amadeus collection offers extraordinary softness at high super numbers. Tonik was their invention — a twisted yarn fabric that resists wrinkling and maintains its shape through long days. For travel suits and high-wear corporate wardrobes, Dormeuil often wins.",
    "In terms of texture and character: Loro Piana tends toward quiet luxury — fabrics that whisper rather than shout. Dormeuil has more variety — from understated to textured to bold. If you want a suit that reads as definitively expensive without calling attention to itself, Loro Piana. If you want texture, pattern, or a fabric that tells a story, Dormeuil's catalogue is broader.",
    "For weddings: Loro Piana Super 150s in ivory, light grey, or pale blue is extraordinary. The fabric photographs beautifully and feels incredible against the skin. For tuxedos: Dormeuil's midnight navy in their Amadeus or Ivory range is the gold standard.",
    "At Fino, we carry both — and we'll guide you through the specific books at your consultation. The right choice depends on occasion, season, and personal preference. Both represent the highest standard of what a suit can be made from.",
  ],
  "why-los-gatos-bespoke-suits": [
    "Los Gatos doesn't get the press that San Francisco does. It's not Saville Row. It's a small town in the Santa Cruz foothills, 14 miles from downtown San Jose. And yet, for bespoke tailoring in the Bay Area, it's become the address that matters.",
    "The reasons are practical. The atelier model — private, appointment-only, unhurried — works better outside the density and cost structure of San Francisco. Clients from Palo Alto, Campbell, Saratoga, and San Jose can reach Los Gatos in 15–25 minutes. There's parking. There's quiet. There's the kind of focused attention that's hard to replicate in a high-traffic urban environment.",
    "Fino sits on South Santa Cruz Avenue, at the heart of downtown Los Gatos. The building has the feel of a proper atelier — not a retail floor, not a shop. When you book an appointment, the studio is yours for the duration of your consultation.",
    "The tailors here — Julian and David — have collectively dressed clients for Silicon Valley galas, Bay Area weddings, and San Jose boardrooms. They understand this community, these events, and the specific demands of dressing well in a region that simultaneously values discretion and excellence.",
    "The other factor: competition makes tailors sharper. Los Gatos has Franco Masoma nearby, and San Francisco has several high-quality operations. The standards here are set accordingly.",
    "For Bay Area clients who want bespoke done properly — without flying to New York or London — Los Gatos, specifically Fino, is the answer.",
  ],
  "how-far-in-advance-wedding-suit": [
    "The most common question, and the one where bad advice leads to real problems.",
    "The short answer: 3–4 months before your wedding date is ideal. Here's the full picture.",
    "Bespoke involves multiple stages. The initial consultation takes 60–90 minutes. Pattern drafting happens in the following week or two. Fabric orders from Loro Piana, Dormeuil, or Holland & Sherry take 2–4 weeks to arrive. Construction takes 4–8 weeks depending on complexity. Fittings happen at two points. Final delivery typically occurs 1–2 weeks before your event.",
    "Run those numbers and you see why 4 months is the comfortable timeline and 3 months is the standard case. At 2 months, you're in rush territory — possible, but limiting. Under 2 months, we need to have a frank conversation about what's achievable.",
    "For groomsmen, add complexity. Multiple suits require staggered scheduling, more fittings, and more logistics. Ideally, you begin that process at the same time as your own suit — not as an afterthought.",
    "The other thing 4 months buys you: peace of mind. You know your suit is done. Any last-minute adjustments — weight changes, final preference tweaks — can be accommodated without panic. The week before your wedding, you should be thinking about everything except the suit.",
  ],
};

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = postContent[params.slug] ?? ["Content coming soon."];
  const related = posts.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--teal)", padding: "160px 24px 80px" }} className="grain-overlay">
        <div className="max-w-3xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tan)" }}>{post.category}</span>
            <span style={{ color: "rgba(198,172,143,0.2)" }}>·</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(234,224,213,0.3)" }}>{post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, fontStyle: "italic", color: "var(--bone)", lineHeight: 1.05, marginBottom: "20px" }}>
            {post.title}
          </h1>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "rgba(234,224,213,0.4)", letterSpacing: "0.1em" }}>
            By {post.author} · {post.date}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "var(--bone)", padding: "64px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            {/* Article */}
            <article>
              {content.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "var(--ink-on-bone)",
                    lineHeight: 1.9,
                    marginBottom: "24px",
                    maxWidth: "680px",
                  }}
                >
                  {para}
                </p>
              ))}
            </article>

            {/* Sidebar */}
            <aside>
              <div style={{ position: "sticky", top: "100px" }}>
                <div style={{ padding: "32px", background: "var(--teal)" }} className="grain-overlay">
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <Eyebrow text="Book a consultation" />
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 300, color: "var(--bone)", lineHeight: 1.2, marginBottom: "12px" }}>
                      Ready to begin?
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.9, marginBottom: "20px" }}>
                      Complimentary consultation · Private studio · Los Gatos
                    </p>
                    <Link href="/book-appointment" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
                      Book Now →
                    </Link>
                    <a href="tel:+14086410025" style={{ display: "block", textAlign: "center", marginTop: "12px", fontFamily: "var(--font-sans)", fontSize: "10px", color: "rgba(234,224,213,0.4)", textDecoration: "none" }}>
                      Or call (408) 641-0025
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section style={{ background: "rgba(234,224,213,0.4)", padding: "64px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow text="Related reading" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ padding: "28px", border: "var(--border-ink)", background: "var(--bone)", cursor: "pointer" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "10px" }}>{p.category}</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 300, color: "var(--ink)", lineHeight: 1.3, marginBottom: "8px" }}>{p.title}</h3>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "rgba(10,9,8,0.3)", letterSpacing: "0.1em" }}>{p.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
