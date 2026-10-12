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
export default TravelCards