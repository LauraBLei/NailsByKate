import Image from "next/image";

interface GalleryGridProps {
  images: string[];
}

// Pattern 1: Large image LEFT, 4 small images RIGHT
export const GalleryGridLeft = ({ images }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-96">
      {/* Large image - spans 2 columns and 2 rows (LEFT) */}
      <div className="col-span-2 row-span-2 relative">
        <Image
          src={images[0]}
          alt="Nail art"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Small images - 4 individual cells (RIGHT) */}
      {images.slice(1, 5).map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src}
            alt="Nail art"
            fill
            className="object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

// Pattern 2: 4 small images LEFT, large image RIGHT
export const GalleryGridRight = ({ images }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-96">
      {/* Small images first - 2 individual cells (LEFT TOP) */}
      {images.slice(0, 2).map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src}
            alt="Nail art"
            fill
            className="object-cover rounded-md"
          />
        </div>
      ))}

      {/* Large image - spans 2 columns and 2 rows (RIGHT) */}
      <div className="col-span-2 row-span-2 relative">
        <Image
          src={images[2]}
          alt="Nail art"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Small images - 2 individual cells (LEFT BOTTOM) */}
      {images.slice(3, 5).map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src}
            alt="Nail art"
            fill
            className="object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};
