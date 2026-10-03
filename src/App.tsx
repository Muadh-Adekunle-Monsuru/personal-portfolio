import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import MinimalLanding from "./components/MinimalLanding";

function App() {
  useEffect(() => {
    const notifyMe = async () => {
      const token = import.meta.env.VITE_TELEGRAM_TOKEN;
      const chatId = import.meta.env.VITE_CHAT_ID;
      const text = "🚀 Someone just viewed your portfolio!";

      try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: text }),
        });
      } catch (err) {
        console.error("Notification failed", err);
      }
    };

    notifyMe();
  }, []);
  return (
    <>
      <Analytics />
      <MinimalLanding />
    </>
  );
}

export default App;
