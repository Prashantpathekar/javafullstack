import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-10 text-white">
        <p className="uppercase tracking-widest text-sm mb-2"> An Ode To </p>

        <h1 className="text-6xl font-serif leading-tight mb-4"> Indian Designs</h1>

      <div className="flex gap-10 text-sm tracking-wide mb-10">
          <span>CURATED</span>
          <span>CRAFT</span>
        </div>

        <button
onClick={() => navigate("/product")}
          className="bg-white text-black px-10 py-3 tracking-widest hover:bg-black hover:text-white transition duration-300"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Home;
