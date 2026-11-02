import Container from "../atoms/Container";
import { hobbies, story } from "@/utils/AboutMe";

export default function Story() {
  return (
    <>
      <Container id="AboutMe">
        <h1>About me</h1>
        <div className="grid max-w-2xl gap-4 pt-8 text-base text-white/80">
          {story.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Container>
      <Container id="Hobbies">
        <h2>Hobbies</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {hobbies.map((group) => (
            <div key={group.title}>
              <p className="pb-3 text-sm uppercase tracking-widest text-accent">{group.title}</p>
              <ul className="grid gap-2 text-base text-white/80">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
