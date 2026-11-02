// Places shown on the map of the About me page.
// kind "work"    = places where I worked or studied (connected with a dotted line, keep them in chronological order)
// kind "visited" = places I have visited
// pos is [latitude, longitude]. In Google Maps, right-click a place and click the numbers to copy them.
export type Place = {
  name: string;
  pos: [number, number];
  text?: string; // optional note shown under the name in the popup
  kind: "work" | "visited";
};

export const places: Place[] = [
  { kind: "work", name: "Kırıkkale", pos: [39.8468, 33.5153], text: "Music science, bachelor's and master's, pedagogical studies (2010–2018)" },
  { kind: "work", name: "Ankara", pos: [39.9334, 32.8597], text: "Music teacher, Cemal Gazeloglu Art Center (2015–2018)" },
  { kind: "work", name: "Lehtimäki", pos: [62.7886, 23.9], text: "Erasmus+ and music teacher, Lehtimäen Erityiskansanopisto (2018–2021)" },
  { kind: "work", name: "Jyväskylä", pos: [62.2426, 25.7473], text: "Pedagogical studies, JAMK (2021–2023)" },
  { kind: "work", name: "Kokkola", pos: [63.8385, 23.1307], text: "ICT Engineering, Centria (2023–2027)" },
  { kind: "work", name: "Helsinki", pos: [60.1699, 24.9384], text: "Digital pedagogy, Humak (2026)" },
];

// Visited places. To add one: v("Name", latitude, longitude) or v("Name", latitude, longitude, "a note").
const v = (name: string, lat: number, lon: number, text?: string): Place => ({
  kind: "visited",
  name,
  pos: [lat, lon],
  text,
});

places.push(
  // Ostrobothnia and the west coast
  v("Vaasa", 63.096, 21.6158),
  v("Laihia", 62.9758, 22.01),
  v("Alajärvi", 63.0, 23.8167),
  v("Lapua", 62.97, 23.0),
  v("Kauhava", 63.1010, 23.064),
  v("Alaharma", 63.2, 22.95),
  v("Kauhajoki", 62.433, 22.176),
  v("Kristinankaupunki", 62.275, 21.375),
  v("Nykarleby", 63.523, 22.531),
  v("Kalajoki", 64.259, 23.949),
  v("Kaustinen", 63.547, 23.697),
  v("Vimpeli", 63.164, 23.821),
  v("Alavus", 62.587, 23.615),
  v("Ähtäri", 62.55, 24.067),
  v("Pori", 61.4851, 21.7974),
  v("Rauma", 61.127, 21.511),
  v("Kankaanpää", 61.8, 22.4),

  // Pirkanmaa
  v("Tampere", 61.4978, 23.761),
  v("Ylöjärvi", 61.55, 23.6),
  v("Nokia", 61.478, 23.505),
  v("Lempäälä", 61.314, 23.752),
  v("Orivesi", 61.677, 24.36),
  v("Ikaalinen", 61.771, 23.069),
  v("Virrat", 62.24, 23.77),

  // Southwest Finland
  v("Turku", 60.4518, 22.2666),
  v("Raisio", 60.485, 22.169),

  // Uusimaa and Päijät-Häme
  v("Espoo", 60.2055, 24.6559),
  v("Vantaa", 60.2934, 25.0378),
  v("Tuusula", 60.403, 25.028),
  v("Porvoo", 60.3932, 25.665),
  v("Lahti", 60.9827, 25.6612),
  v("Hollola", 60.99, 25.517),
  v("Padasjoki", 61.35, 25.283),
  v("Hämeenlinna", 60.9959, 24.4643),
  v("Kuhmoinen", 61.565, 25.183),
  v("Sysmä", 61.5, 25.683),

  // Kymenlaakso and South Karelia
  v("Kouvola", 60.868, 26.704),
  v("Kotka", 60.466, 26.9458),
  v("Lappeenranta", 61.0587, 28.1887),

  // Central Finland
  v("Jämsä", 61.864, 25.19),
  v("Jämsänkoski", 61.923, 25.184),
  v("Keuruu", 62.263, 24.709),
  v("Multia", 62.417, 24.783),
  v("Haapamäki", 62.233, 24.467),
  v("Petäjävesi", 62.25, 25.183),
  v("Toivakka", 62.1, 26.083),
  v("Tikkakoski", 62.4125, 25.62),
  v("Lievestuore", 62.267, 26.2),
  v("Äänekoski", 62.603, 25.726),
  v("Suolahti", 62.566, 25.86),
  v("Konginkangas", 62.6, 25.78),
  v("Saarijärvi", 62.703, 25.257),
  v("Karstula", 62.875, 24.803),
  v("Kyyjärvi", 63.042, 24.57),
  v("Kivijärvi", 63.117, 25.067),
  v("Kinnula", 63.367, 24.967),
  v("Perho", 63.217, 24.417),
  v("Salamajärvi", 63.3, 24.75),
  v("Viitasaari", 63.075, 25.865),
  v("Kannonkoski", 62.98, 25.26),
  v("Sumiainen", 62.51, 26.1),
  v("Konnevesi", 62.63, 26.29),
  v("Laukaa", 62.415, 25.957),
  v("Hankasalmi", 62.387, 26.438),
  v("Korpilahti", 62.017, 25.55),
  v("Koskenpää", 61.95, 25.3),
  v("Joutsa", 61.733, 26.117),
  v("Luhanka", 61.8, 25.7),

  // Savo and Etelä-Savo
  v("Kuopio", 62.8924, 27.677),
  v("Siilinjärvi", 63.075, 27.66),
  v("Suonenjoki", 62.624, 27.128),
  v("Rautalampi", 62.62, 26.83),
  v("Nilsiä", 63.2, 28.083),
  v("Tahko", 62.995, 28.065),
  v("Varkaus", 62.314, 27.873),
  v("Pieksämäki", 62.3, 27.133, "Centria campus"),
  v("Kangasniemi", 61.992, 26.642),
  v("Mikkeli", 61.6887, 27.2723),
  v("Juva", 61.896, 27.863),

  // North
  v("Oulu", 65.0121, 25.4651),
  v("Kempele", 64.915, 25.5),
  v("Hailuoto", 65.017, 24.717),
  v("Vaala", 64.46, 26.82),
  v("Kemi", 65.7369, 24.5637),
  v("Rovaniemi", 66.5039, 25.7294),
  v("Haparanda", 65.835, 24.138, "Sweden, across the border from Tornio"),
  v("Levi", 67.804, 24.803),
  v("Muonio", 67.956, 23.681),
  v("Kilpisjärvi", 69.05, 20.79),
);
