import "./Gallery.css";

function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
      title: "Bridal Collection",
    },
    {
      url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      title: "Designer Lehenga",
    },
    {
      url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      title: "Modern Fashion",
    },
    {
      url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      title: "Premium Stitching",
    },
    {
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      title: "Luxury Wear",
    },
    {
      url: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      title: "Traditional Style",
    },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <span>OUR COLLECTIONS</span>
        <h2>Elegance in Every Stitch</h2>
        <p>
          Discover our exclusive range of bridal,
          ethnic and designer collections.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.url} alt={item.title} />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;