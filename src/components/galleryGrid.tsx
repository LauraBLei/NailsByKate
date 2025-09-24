import Image from "next/image";

interface GalleryGridProps {
  images: string[];
}

// Pattern 1: Large image LEFT, 4 small images RIGHT (desktop) / Large image TOP, 4 small images BOTTOM (mobile)
export const GalleryGridLeft = ({ images }: GalleryGridProps) => {
  return (
    <div className="mb-8">
      {/* Desktop: grid layout */}
      <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-4 h-96">
        {/* Large image - spans 2 columns and 2 rows (LEFT) */}
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={images[0]}
            alt="Nail art"
            fill
            className="object-cover object-center rounded-md"
          />
        </div>

        {/* Small images - 4 individual cells (RIGHT) */}
        {images.slice(1, 5).map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt="Nail art"
              fill
              className="object-cover object-center rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Large image first */}
        <div className="relative h-64">
          <Image
            src={images[0]}
            alt="Nail art"
            fill
            className="object-cover object-center rounded-md"
          />
        </div>

        {/* 4 small images in a 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((src, index) => (
            <div key={index} className="relative h-32">
              <Image
                src={src}
                alt="Nail art"
                fill
                className="object-cover object-center rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Pattern 2: 4 small images LEFT, large image RIGHT (desktop) / Large image TOP, 4 small images BOTTOM (mobile)
export const GalleryGridRight = ({ images }: GalleryGridProps) => {
  return (
    <div className="mb-8">
      {/* Desktop: grid layout */}
      <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-4 h-96">
        {/* Small images first - 2 individual cells (LEFT TOP) */}
        {images.slice(0, 2).map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt="Nail art"
              fill
              className="object-cover object-center rounded-md"
            />
          </div>
        ))}

        {/* Large image - spans 2 columns and 2 rows (RIGHT) */}
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={images[2]}
            alt="Nail art"
            fill
            className="object-cover object-center rounded-md"
          />
        </div>

        {/* Small images - 2 individual cells (LEFT BOTTOM) */}
        {images.slice(3, 5).map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt="Nail art"
              fill
              className="object-cover object-center rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Large image first */}
        <div className="relative h-64">
          <Image
            src={images[2]}
            alt="Nail art"
            fill
            className="object-cover object-center rounded-md"
          />
        </div>

        {/* 4 small images in a 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {[...images.slice(0, 2), ...images.slice(3, 5)].map((src, index) => (
            <div key={index} className="relative h-32">
              <Image
                src={src}
                alt="Nail art"
                fill
                className="object-cover object-center rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
