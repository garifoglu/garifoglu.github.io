// Places shown on the map of the About me page.
// kind "work"    = places where I worked or studied (connected with a dotted line, keep them in chronological order)
// kind "visited" = places I have visited
// pos is [latitude, longitude]. In Google Maps, right-click a place and click the numbers to copy them.
export type Place = {
  name: string;
  pos: [number, number];
  text: string;
  kind: "work" | "visited";
};

export const places: Place[] = [
  { kind: "work", name: "Kırıkkale", pos: [39.8468, 33.5153], text: "Music science, bachelor's and master's, pedagogical studies (2010–2018)" },
  { kind: "work", name: "Ankara", pos: [39.9334, 32.8597], text: "Music teacher, Cemal Gazeloglu Art Center (2015–2018)" },
  { kind: "work", name: "Alajärvi", pos: [63.0, 23.8167], text: "Erasmus+ and music teacher, Lehtimäen Erityiskansanopisto (2018–2021)" },
  { kind: "work", name: "Jyväskylä", pos: [62.2426, 25.7473], text: "Pedagogical studies, JAMK (2021–2023)" },
  { kind: "work", name: "Kokkola", pos: [63.8385, 23.1307], text: "ICT Engineering, Centria (2023–2027)" },
  { kind: "work", name: "Helsinki", pos: [60.1699, 24.9384], text: "Digital pedagogy, Humak (2026)" },

  // Add the places you have visited here, for example:
  // { kind: "visited", name: "Tallinn", pos: [59.437, 24.7536], text: "Your note about the trip" },
];
