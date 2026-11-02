import ContactLinks from "../molecules/ContactLinks";
import Container from "../atoms/Container";
import Socials from "../molecules/Socials";

export default function Contact() {
  return (
    <Container id="Contact">
      <h2>Let&apos;s get in touch.</h2>
      <div className="lg:flex justify-between items-end">
        {/* Ctrl + Click on the component to open up the component file. */}
        <ContactLinks/>
        <Socials/>
      </div>
    </Container>
  );
}
