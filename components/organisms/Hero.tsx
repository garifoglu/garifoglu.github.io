import Container from "../atoms/Container";

export default function Hero() {
  return (
    <Container id={"Home"} className="relative overflow-hidden">
      {/* Soft moving colour blobs in the background */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <div className="absolute -left-20 -top-20 h-96 w-96 animate-float rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-pink/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-2/3">
          <p className="pb-4 text-sm uppercase tracking-widest text-accent">
            EdTech · Digital pedagogy · AI
          </p>
          {/* This is the headline. Change accordingly. */}
          <h1 className="pb-8">
            Hey, I&apos;m Gökhan Arifoglu. <br />
            <span className="text-accent">Digital Pedagogy Specialist</span> <br />
            EdTech &amp; <span className="text-accent">AI</span> Integration Designer.
          </h1>
          {/* This is the sub headline. Change accordingly. */}
          <p className="max-w-xl text-base leading-relaxed lg:text-lg lg:leading-tight">
            I help educational institutions adopt digital pedagogy by building
            AI-powered EdTech workflows and automated LMS routines, bridging the
            gap between modern technology and human-centered pedagogy.
          </p>
          <div className="flex flex-wrap gap-3 pt-8">
            <a
              href="/#Projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-black no-underline transition-opacity hover:opacity-80"
            >
              See my work
            </a>
            <a
              href="/#Contact"
              className="rounded-full border-[1px] border-white/40 px-6 py-3 text-sm no-underline transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <img
          src="/images/profile.jpg"
          alt="Portrait of Gökhan Arifoglu"
          draggable={false}
          className="pointer-events-none select-none mx-auto h-48 w-48 rounded-full border-[1px] border-gray object-cover object-center shadow-[0_0_80px_rgb(var(--accent)/0.3)] ring-4 ring-accent/30 lg:mx-0 lg:h-72 lg:w-72"
        />
      </div>
    </Container>
  );
}
