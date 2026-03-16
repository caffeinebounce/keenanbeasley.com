import Link from "next/link";
import { Section, Container, Button } from "@caffeinebounce/ui";

const mediaVideos = [
  {
    id: "YWOP9u2TC7E",
    title: "MEN THRIVE Jeff Johnson v Keenan Beasley | Worlds Greatest Game",
    description:
      "A long-form conversation on leadership, growth, and building with conviction inside complex systems.",
  },
  {
    id: "rZHT-Jl74s0",
    title: "How to effectively run a Board Meeting | Keenan Beasley",
    description:
      "A practical discussion on governance, communication, and the operating discipline behind stronger board rooms.",
  },
  {
    id: "U9sMLGy1R10",
    title:
      "House of Athlete CEO Brandon Marshall v Keenan Beasley | Worlds Greatest Game",
    description:
      "A conversation about brand, performance, and the frameworks that turn attention into durable enterprise value.",
  },
];

function MediaVideoCard({
  description,
  featured = false,
  id,
  title,
}: {
  description: string;
  featured?: boolean;
  id: string;
  title: string;
}) {
  return (
    <article
      className={`site-card-static overflow-hidden ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className="border-b border-white/10 bg-black">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${id}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <div className="space-y-4 p-7 md:p-8">
        <p className="site-kicker">Video</p>
        <h2 className={`${featured ? "text-3xl md:text-4xl" : "text-2xl"} leading-tight`}>
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/72">
          {description}
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-sm uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-[#FF4628]"
        >
          Watch on YouTube
        </a>
      </div>
    </article>
  );
}

export default function MediaPage() {
  const [featuredVideo, ...supportingVideos] = mediaVideos;

  return (
    <div className="site-page">
      <Section spacing="lg">
        <Container className="max-w-5xl space-y-6">
          <p className="site-kicker">Media</p>
          <h1 className="text-5xl leading-tight md:text-7xl">
            Interviews, conversations, and operating perspective.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75">
            A focused archive of video conversations on leadership, brand,
            ownership, governance, and the systems required to turn cultural
            relevance into long-term value.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link
              href="https://www.youtube.com/channel/UCBp9ngjP9cyPO6BsYT4GLtg"
              target="_blank"
              rel="noreferrer"
            >
              Visit YouTube Channel
            </Link>
          </Button>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container className="space-y-10">
          <div className="space-y-4">
            <p className="site-kicker">Selected Videos</p>
            <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">
              Real conversations from the current archive.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <MediaVideoCard
              id={featuredVideo.id}
              title={featuredVideo.title}
              description={featuredVideo.description}
              featured
            />
            {supportingVideos.map((video) => (
              <MediaVideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                description={video.description}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
