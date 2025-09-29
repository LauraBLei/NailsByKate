import { Headline } from "../headline";
import { GalleryGridLeft, GalleryGridRight } from "../galleryGrid";

const galleryImages = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
  "/gallery/9.png",
  "/gallery/10.png",
  // Add more images as needed
];

// Function to get random images without duplicates
export const Gallery = () => {
  return (
    <section id="gallery" className="w-full  flex flex-col gap-5 mb-10">
      <Headline value="GALLERY" />
      <div className="px-5 md:px-10">
        {/* Pattern 1: Large image left, 4 small right */}
        <GalleryGridLeft images={galleryImages.slice(0, 5)} />

        {/* Pattern 2: 4 small left, large image right */}
        <GalleryGridRight images={galleryImages.slice(5, 10)} />
      </div>
    </section>
  );
};
