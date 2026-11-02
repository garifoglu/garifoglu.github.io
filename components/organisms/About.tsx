import Container from "../atoms/Container";

export default function About() {
  return (
    <Container id={"About"}>
      <h2>About Me</h2>
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="max-w-3xl space-y-6 text-base leading-relaxed lg:col-span-2 lg:text-lg lg:leading-snug">
          <p>
            I combine educational technology, pedagogy, AI and IT. I started
            as a music teacher and moved into IT through my engineering
            studies in Finland.
          </p>
          <p>
            In 2026 I worked at Humak University of Applied Sciences. I was a
            Moodle and Canvas administrator and technical support, took part in
            the Moodle–Canvas migration, and built AI-assisted tools that
            turned months of manual work into weeks.
          </p>
          <p>
            For me AI is never an end in itself. Its use has to rest on
            pedagogical goals, and familiar ways of working are worth
            questioning when they could be done better.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4 self-start lg:grid-cols-1">
          {[
            ["2010", "teaching music since university"],
            ["3", "languages: Turkish, Finnish, English"],
            ["2026", "Humak: intern, then specialist"],
          ].map(([big, small]) => (
            <li key={small} className="rounded-md border-[1px] border-gray bg-panel p-4">
              <p className="text-lg text-accent">{big}</p>
              <p className="text-sm text-white/70">{small}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
