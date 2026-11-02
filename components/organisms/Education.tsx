import Container from "../atoms/Container";
import { education, experience } from "@/utils/SiteData";

type Item = { period: string; title: string; place: string; desc: string };

function Timeline({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <div>
      <p className="pb-6 text-lg">{heading}</p>
      <ol className="border-l-[1px] border-gray">
        {items.map((item) => (
          <li key={item.period + item.title} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-accent" />
            <p className="text-sm uppercase tracking-widest text-accent">{item.period}</p>
            <p className="pt-1 text-lg leading-tight">{item.title}</p>
            <p className="text-base text-white/80">{item.place}</p>
            {item.desc && <p className="pt-1 text-sm text-white/70">{item.desc}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Education() {
  return (
    <Container id="Education">
      <h2>Education and experience</h2>
      <div className="grid gap-16 lg:grid-cols-2">
        <Timeline heading="Education" items={education} />
        <Timeline heading="Earlier experience" items={experience} />
      </div>
    </Container>
  );
}
