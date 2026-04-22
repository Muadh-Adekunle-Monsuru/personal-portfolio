import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Html } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

// --- 3D Components ---

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      (state.mouse.x * 2) / 10,
      0.05,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      (state.mouse.y * 2) / 10,
      0.05,
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function HeroText() {
  return (
    <Html position={[0, 0, -5]} center transform zIndexRange={[10, 0]}>
      <div className="flex flex-col items-center select-none pointer-events-none">
        <h1
          className="text-5xl md:text-[8vw] font-black uppercase text-white tracking-widest whitespace-nowrap"
          style={{
            textShadow:
              "6px 0px 0px rgba(0, 255, 255, 0.7), -6px 0px 0px rgba(255, 0, 255, 0.7)",
          }}
        >
          FULL-STACK.
          <br />
          FULL-SCOPE.
        </h1>
        <p className="mt-4 font-mono text-xl md:text-3xl text-gray-300 tracking-[0.3em]">
          DATA. CODE. DREAMS.
        </p>
      </div>
    </Html>
  );
}

// --- HUD UI Components ---

function GlobalNav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const int = setInterval(() => {
      const date = new Date();
      setTime(date.toISOString().split("T")[1].split(".")[0]);
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="absolute top-6 left-6 z-20 font-mono text-cyan-400 select-none">
      <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#0ff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
        DATA STREAM
      </h2>
      <div className="mt-2 text-xs md:text-sm text-cyan-200/80 space-y-1">
        <p>UTC: {time}</p>
        <p className="animate-pulse">SECURE | LNK EST.</p>
        <p>GEO: 34.02 N / 118.49 W</p>
      </div>
    </div>
  );
}

function ActionGrid() {
  const navigate = useNavigate();

  const buttons = [
    { label: "[ > VIEW.PROJECTS ]", action: () => navigate("/projects") },
    {
      label: "[ > RESUME.PDF ]",
      action: () =>
        window.open(
          "https://drive.google.com/file/d/1k0aLZju9n7dx8DOXgmDWuaeFQyHvG22v/view?usp=sharing",
          "_blank",
        ),
    },
    {
      label: "[ > GITHUB.REPOSITORIES ]",
      action: () =>
        window.open("https://github.com/Muadh-Adekunle-Monsuru", "_blank"),
    },
    {
      label: "[ > LINKEDIN.NETWORK ]",
      action: () =>
        window.open("https://www.linkedin.com/in/muadh-monsuru/", "_blank"),
    },
  ];

  return (
    <div className="absolute bottom-6 right-6 z-20 flex flex-col space-y-3 font-mono">
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={btn.action}
          className="px-4 py-2 text-xs md:text-sm text-[#0ff] border border-[#0ff]/30 bg-[#0ff]/5 backdrop-blur-sm hover:bg-[#0ff]/20 hover:border-[#0ff] hover:translate-x-[-10px] transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] text-right group"
        >
          <span className="opacity-70 group-hover:opacity-100">
            {btn.label}
          </span>
        </button>
      ))}
    </div>
  );
}

function EnvironmentData() {
  const [fps, setFps] = useState(90);

  useEffect(() => {
    const int = setInterval(
      () => setFps(Math.floor(Math.random() * 5 + 90)),
      500,
    );
    return () => clearInterval(int);
  }, []);

  return (
    <div className="absolute bottom-6 left-6 z-20 font-mono text-[10px] md:text-xs text-violet-400/70 space-y-1 select-none">
      <p>
        LNK/STATUS: <span className="text-[#0ff]">[STABLE]</span>
      </p>
      <p>
        RENDER/ENGINE: <span className="text-white">[3JS.IO]</span>
      </p>
      <p>
        REFRESH/RATE: <span className="text-white">[{fps}.1 FPS]</span>
      </p>
      <p>
        SECTOR: <span className="text-white">[LAGOS/NIGERIA]</span>
      </p>
    </div>
  );
}

function PrimaryDataConsole() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] max-w-[500px] md:max-w-[700px] bg-black/60 backdrop-blur-xl border border-[#0ff]/40 p-8 md:p-12 font-mono shadow-[0_0_60px_rgba(0,255,255,0.15)] rounded-md flex flex-col justify-center">
      {/* Title */}
      <h3 className="text-[#0ff] text-lg md:text-2xl mb-8 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] border-b border-[#0ff]/30 pb-3 font-bold text-center">
        PERSONA_FILE: [MUADH_A]
      </h3>

      {/* Identity */}
      <div className="mb-10">
        <h4 className="text-white font-extrabold tracking-wide text-2xl md:text-4xl text-center whitespace-nowrap">
          MUADH ADEKUNLE MONSURU
        </h4>
        <p className="text-sm md:text-lg text-gray-300 mt-5 leading-relaxed text-center px-4">
          Engineering reliable digital ecosystems across web, mobile, and 3D
          interactions.
        </p>
      </div>

      {/* Trajectory */}
      <div className="mb-10 mx-auto w-full max-w-sm">
        <div className="text-sm md:text-base text-violet-400 tracking-widest mb-4 font-bold text-center">
          RECENT TRAJECTORY
        </div>
        <div className="border-l-2 border-[#0ff]/40 pl-5 space-y-5 relative ml-6 md:ml-10 mt-3 text-left">
          <div className="relative">
            <div className="absolute left-[-26px] top-1.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#0ff] rounded-full shadow-[0_0_8px_rgba(0,255,255,1)]" />
            <p className="text-[13px] md:text-base text-white font-bold">
              Riskgratis: Intern
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[-26px] top-1.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-violet-500 rounded-full" />
            <p className="text-[13px] md:text-base text-white font-bold">
              Sqwads: Intern
            </p>
          </div>
        </div>
      </div>

      {/* Tool Matrix */}
      <div>
        <div className="text-[12px] md:text-base text-violet-400 tracking-widest mb-5 font-bold text-center">
          TOOL MATRIX
        </div>
        <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-sm mx-auto">
          {[
            {
              Icon: SiTypescript,
              label: "TypeScript",
              color: "hover:text-blue-400",
            },
            { Icon: SiNextdotjs, label: "Next.js", color: "hover:text-white" },
            {
              Icon: SiTailwindcss,
              label: "Tailwind",
              color: "hover:text-teal-400",
            },
            {
              Icon: SiMongodb,
              label: "MongoDB",
              color: "hover:text-green-500",
            },
            {
              Icon: FaLaptopCode,
              label: "React N.",
              color: "hover:text-cyan-500",
            },
            {
              Icon: FaLaptopCode,
              label: "Node.js",
              color: "hover:text-green-600",
            },
            {
              Icon: FaLaptopCode,
              label: "Three.js",
              color: "hover:text-gray-300",
            },
            {
              Icon: FaLaptopCode,
              label: "Framer",
              color: "hover:text-pink-500",
            },
          ].map((tool, i) => (
            <div
              key={i}
              className="flex justify-center items-center p-3 md:p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group relative cursor-pointer"
            >
              <tool.Icon
                className={`text-gray-400 transition-colors ${tool.color} text-2xl md:text-3xl`}
              />
              {/* Hover label */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/20 text-[10px] md:text-[11px] px-2 py-1 whitespace-nowrap text-white z-30 pointer-events-none rounded">
                {tool.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FuturisticLanding() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden select-none">
      {/* 2D HUD Overlays */}
      <GlobalNav />
      <EnvironmentData />
      <PrimaryDataConsole />
      <ActionGrid />

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <color attach="background" args={["#050505"]} />
          {/* Cyberpunk Lights */}
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 2, -5]} color="#0ff" intensity={50} />
          <pointLight position={[-5, -2, -5]} color="#f0f" intensity={50} />
          <spotLight
            position={[0, 5, 0]}
            color="#fff"
            intensity={20}
            penumbra={1}
          />

          <Stars
            radius={50}
            depth={50}
            count={3000}
            factor={4}
            saturation={1}
            fade
            speed={1.5}
          />

          <CameraRig />
        </Canvas>
      </div>
    </div>
  );
}
