import "../App.css";

const destinations = [
  {
    id: "01",
    title: "Explore the World",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    featured: true,
  },
  {
    id: "02",
    title: "Mountain Adventure",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "03",
    title: "Ancient Wonders",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "04",
    title: "Into the Forest",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "05",
    title: "Ocean Escape",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "06",
    title: "Paris Romance",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "07",
    title: "Desert Safari",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "08",
    title: "Tropical Paradise",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "09",
    title: "Japanese Serenity",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "10",
    title: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "11",
    title: "Venice Canals",
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "12",
    title: "Northern Lights",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "13",
    title: "Waterfall Wonders",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "14",
    title: "City Lights",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "15",
    title: "Misty Mountains",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=700&q=85",
  },
];

function TravelCards() {
  return (
    <div className="travel-container">
      {destinations.map((item) => {
        return (
          <div
            key={item.id}
            className={`travel-cards ${item.featured ? "featured" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="cards-overlay">
              <div className="card-content">
                {item.featured ? (
                  <div>
                    <span>{item.id}</span>
                    <h3>{item.title}</h3>
                  </div>
                ) : (
                  <div>
                    <span>{item.id}</span>
                    <h3>{item.title}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TravelCards;
