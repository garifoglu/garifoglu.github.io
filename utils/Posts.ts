// Blog posts of the About me page. The newest post goes first.
// Each string in `body` is one paragraph.
// The section stays hidden while this list is empty.
export type Post = {
  date: string; // e.g. "2 Nov 2026"
  title: string;
  body: string[];
};

export const posts: Post[] = [
  // {
  //   date: "2 Nov 2026",
  //   title: "Title of the post",
  //   body: ["First paragraph.", "Second paragraph."],
  // },
];
