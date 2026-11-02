import Container from "../atoms/Container";
import { skillGroups } from "@/utils/SiteData";

export default function Skills() {
  return (
    <Container id="Skills">
      <h2>Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-md border-[1px] border-gray bg-panel p-6">
            <p className="pb-4 text-lg leading-tight">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border-[1px] border-accent/40 px-3 py-1 text-sm text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
            {group.note && (
              <p className="pt-4 text-sm text-white/70">{group.note}</p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
