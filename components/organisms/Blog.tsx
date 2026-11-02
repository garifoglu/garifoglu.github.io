import Container from "../atoms/Container";
import { posts } from "@/utils/Posts";

export default function Blog() {
  if (posts.length === 0) return null;
  return (
    <Container id="Blog">
      <h2>Blog</h2>
      <div className="grid gap-16">
        {posts.map((post) => (
          <article key={post.date + post.title} className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-accent">{post.date}</p>
            <h3 className="pb-4 pt-1 text-xl">{post.title}</h3>
            <div className="grid gap-4 text-base text-white/80">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
