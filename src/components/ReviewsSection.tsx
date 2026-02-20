import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Thomas M.",
    rating: 5,
    text: "Hervorragende Arbeit! Das Team von Ruland hat unsere große Eiche fachgerecht zurückgeschnitten. Sehr professionell und sauber gearbeitet.",
    date: "vor 2 Monaten",
  },
  {
    name: "Sabine K.",
    rating: 5,
    text: "Nach dem Sturm waren sie innerhalb weniger Stunden da und haben den umgestürzten Baum sicher entfernt. Absolute Empfehlung!",
    date: "vor 3 Monaten",
  },
  {
    name: "Hans-Peter W.",
    rating: 5,
    text: "Faire Preise, pünktlich und extrem gründlich. Unsere Hecke sah noch nie so gut aus. Komme nächstes Jahr wieder!",
    date: "vor 4 Monaten",
  },
  {
    name: "Andrea L.",
    rating: 4,
    text: "Kompetente Beratung und saubere Ausführung der Baumfällung. Alles wurde ordentlich aufgeräumt und entsorgt.",
    date: "vor 5 Monaten",
  },
];

const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
      />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Kundenstimmen
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Das sagen unsere Kunden
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">{avgRating}</span>
            <span className="text-sm text-muted-foreground">von 5 Sternen</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <Card key={review.name} className="border-transparent bg-card">
              <CardContent className="p-6">
                <Stars count={review.rating} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  „{review.text}"
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-label="Google">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs text-muted-foreground">Google Bewertung</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
