/** Sketch filenames only — loaded on demand via import.meta.glob (see Item.jsx). */
export const Data = [
  { file: "War of the Planet of the Apes.jpg", title: "War of the Planet of the Apes" },
  { file: "IMG_0357.JPG", title: "" },
  { file: "Hyper-Realistic.jpg", title: "" },
  { file: "Atharva Lokhande.jpg", title: "" },
  { file: "Rishi Kapoor.jpg", title: "Rishi Kapoor" },
  { file: "Img2.jpg", title: "" },
  { file: "Img3.jpg", title: "" },
  { file: "Img1.jpg", title: "" },
  { file: "Maitri Gajjar.jpg", title: "" },
  { file: "Matt Blanc.jpg", title: "Matt Blanc" },
  { file: "Cole Spouse.jpg", title: "Cole Spouse" },
  { file: "Darren Barnet.jpg", title: "Darren Barnet" },
  { file: "Michael Jackson.jpg", title: "Michael Jackson" },
  { file: "Pinterest3.jpg", title: "" },
  { file: "Rami Malek.jpg", title: "Rami Malek" },
  { file: "Riddhi.jpg", title: "" },
  { file: "Vin Diesel.jpg", title: "Vin Diesel" },
  { file: "Billie Ellish.jpg", title: "Billie Ellish" },
  { file: "Millie Bobby Brown.jpg", title: "Millie Bobby Brown" },
  { file: "Hazel Sheth.jpg", title: "" },
  { file: "David Schwimmer.JPG", title: "David Schwimmer" },
  { file: "Chadwick Boseman.jpg", title: "Chadwich Boseman" },
  { file: "IMG_0485.JPG", title: "" },
];

const sketchImporters = import.meta.glob("../../assets/sketches/*", {
  import: "default",
  eager: false,
});

export function loadSketchUrl(file) {
  const key = `../../assets/sketches/${file}`;
  const load = sketchImporters[key];
  if (!load) {
    return Promise.reject(new Error(`Missing sketch asset: ${file}`));
  }
  return load();
}
