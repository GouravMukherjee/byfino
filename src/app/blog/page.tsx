import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "The Journal | Bespoke Menswear Insights | Fino Los Gatos",
  description:
    "The Fino Journal — style guides, fabric education, suit care tips, and bespoke menswear insights from the Los Gatos atelier.",
  alternates: { canonical: "https://byfino.com/blog" },
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--teal)", padding: "160px 24px 80px" }} className="grain-overlay">
        <div className="max-w-4xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text="The Fino Journal" />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 400, fontStyle: "italic", color: "var(--bone)", lineHeight: 1.05 }}>
            Style, craft, and the art of dressing well.
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--bone)", padding: "64px 24px" }}>
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "48px" }}>
              <div className="post-card" style={{ padding: "48px", background: "rgba(198,172,143,0.15)", border: "var(--border-ink)", cursor: "pointer" }}>
                <div className="flex gap-3 items-center mb-12">
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tan)" }}>{featured.category}</span>
                  <span style={{ color: "rgba(10,9,8,0.2)" }}>·</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(10,9,8,0.35)" }}>Featured</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "16px" }}>{featured.title}</h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginBottom: "24px", maxWidth: "600px" }}>{featured.excerpt}</p>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(10,9,8,0.35)" }}>
                  {featured.author} · {featured.date} · {featured.readTime}
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="post-card" style={{ padding: "32px", border: "var(--border-ink)", background: "var(--bone)", cursor: "pointer", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "12px" }}>{post.category}</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 300, color: "var(--ink)", lineHeight: 1.2, marginBottom: "12px" }}>{post.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginBottom: "20px" }}>{post.excerpt}</p>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(10,9,8,0.3)" }}>
                    {post.author} · {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
