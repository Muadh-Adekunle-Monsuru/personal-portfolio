import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center font-mono select-none">
      <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
      
      {/* Glitchy Text */}
      <div className="relative z-10 flex flex-col items-center p-8 bg-black/60 backdrop-blur-md border border-[#0ff]/20 shadow-[0_0_30px_rgba(0,255,255,0.05)] rounded-md">
        <h1 
          className="text-6xl md:text-8xl font-black uppercase text-white tracking-widest text-center"
          style={{
            textShadow: "4px 0px 0px rgba(0, 255, 255, 0.7), -4px 0px 0px rgba(255, 0, 255, 0.7)",
          }}
        >
          404
        </h1>
        <h2 className="text-lg md:text-2xl font-bold uppercase text-[#0ff] tracking-widest mt-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] text-center">
          DATA STREAM NOT FOUND
        </h2>
        <p className="text-gray-400 mt-4 text-xs md:text-sm tracking-widest max-w-md text-center leading-relaxed">
          The requested sector path is invalid or corrupted. Please return to the primary data stream.
        </p>

        {/* Return Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 text-sm md:text-base text-[#0ff] border border-[#0ff]/40 bg-[#0ff]/10 backdrop-blur-sm hover:bg-[#0ff]/20 hover:border-[#0ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] group"
        >
          <span className="opacity-80 group-hover:opacity-100">[ &lt; RETURN TO SECURE LNK ]</span>
        </button>
      </div>

      {/* Aesthetic Cyberpunk Details */}
      <div className="absolute top-6 left-6 text-[#0ff] text-xs opacity-50">
        SYS_ERR_CODE: 404
      </div>
      <div className="absolute bottom-6 right-6 text-violet-400 text-xs opacity-50 text-right">
        LNK_STATUS: [BROKEN]
      </div>
    </div>
  );
}
