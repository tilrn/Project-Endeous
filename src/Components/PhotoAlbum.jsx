
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/styles.css";
import "../Components/PhotoAbum.css";


const photos = Array.from({ length: 50 }, (_, i) => {
  const width = 400 + Math.floor(Math.random() * 800);
  const height = 300 + Math.floor(Math.random() * 500);
  const src = `https://picsum.photos/id/${i + 10}/${width}/${height}`;

  return {
    src,
    width,
    height,
    srcSet: [
      {
        src: `https://picsum.photos/id/${i + 10}/${Math.floor(width / 2)}/${Math.floor(height / 2)}`,
        width: Math.floor(width / 2),
        height: Math.floor(height / 2),
      },
      {
        src: `https://picsum.photos/id/${i + 10}/${Math.floor(width / 4)}/${Math.floor(height / 4)}`,
        width: Math.floor(width / 4),
        height: Math.floor(height / 4),
      },
    ],
  };
});

export default function Gallery() {
  return (
    <div className="gallery-container">
      <RowsPhotoAlbum
        photos={photos}
        sizes={{
          size: "1000px", // you can reduce this more if needed
          sizes: [
            {
              viewport: "(max-width: 1200px)",
              size: "calc(100vw - 64px)",
            },
          ],
        }}
      />
    </div>
  );
}
