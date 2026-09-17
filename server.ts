import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
// Safe loader for product catalog data (avoids native ESM file extension resolution issues)
function getProducts(): any[] {
  try {
    const candidates = [
      path.join(process.cwd(), "src", "data", "products.json"),
      path.join(process.cwd(), "public", "products.json"),
      path.join(process.cwd(), "dist", "products.json"),
    ];
    for (const p of candidates) {
      if (fs.existsSync(p)) {
        const raw = fs.readFileSync(p, "utf-8");
        return JSON.parse(raw);
      }
    }
  } catch (err) {
    console.error("Error reading products.json:", err);
  }
  return [];
}

// Load environment variables from .env.local (preferred for local development) and .env
const envLocalPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
}
dotenv.config();

// Lazy initialization of Gemini SDK
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

const PRODUCTS = getProducts();

async function startServer() {
  const app = express();

  const distPath = (typeof __dirname !== "undefined" && fs.existsSync(path.join(__dirname, "index.html")) && !fs.existsSync(path.join(__dirname, "src")))
    ? __dirname
    : path.join(process.cwd(), "dist");

  const isBundledServer = typeof __filename !== "undefined" && (__filename.endsWith(".cjs") || __filename.includes("dist"));
  const hasDist = fs.existsSync(path.join(distPath, "index.html"));
  const isProduction = process.env.NODE_ENV === "production" || hasDist || isBundledServer;

  app.use(express.json({ limit: "30mb" }));

  // Health check endpoint for Cloud Run and monitoring
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Endpoint to upload a slide hero image
  app.post("/api/upload-hero-image", (req, res) => {
    try {
      const { filename, base64Data } = req.body;
      if (!base64Data) {
        return res.status(400).json({ error: "No se proporcionó imagen" });
      }
      const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(cleanBase64, "base64");
      
      const targetName = filename || "katty-prive-concierge.jpg";
      const publicPath = path.join(process.cwd(), "public", "images", targetName);
      const distPath = path.join(process.cwd(), "dist", "images", targetName);
      
      fs.mkdirSync(path.dirname(publicPath), { recursive: true });
      fs.writeFileSync(publicPath, buffer);
      
      try {
        if (fs.existsSync(path.dirname(distPath))) {
          fs.writeFileSync(distPath, buffer);
        }
      } catch (_) {}
      
      console.log(`[Upload] Image successfully written to ${publicPath}`);
      res.json({ success: true, url: `/images/${targetName}?t=${Date.now()}` });
    } catch (err: any) {
      console.error("[Upload] Error writing image:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // Endpoint to fetch products
  app.get("/api/products", (req, res) => {
    res.json(getProducts());
  });

  // AI Gifting Concierge / Assistant Endpoint
  app.post("/api/gift-consultant", async (req, res) => {
    try {
      const { message, chatHistory, preferences } = req.body;

      const ai = getGenAI();
      if (!ai) {
        return res.json({
          text: "Bienvenida a Katty Privé. En este momento nuestra consejería virtual se encuentra en modo catálogo. Por favor, explore nuestras piezas exclusivas o contáctenos por WhatsApp para una atención personalizada.",
        });
      }

      // Build conversation context
      const initialInstruction = `Eres la "Consejera Virtual de Regalos de Katty Privé", una distinguida consejera y asesora de alta joyería, etiqueta y lujo sumamente sofisticada, culta y refinada. 
Tu tono de voz es extremadamente formal, cortés, cálido, poético y respetuoso. 
Te diriges a quien te consulta con distinción, redactando siempre en femenino y refiriéndote con deferencia ("Estimada clienta", "Ilustre visitante de Katty Privé", "Distinguidas damas").

Tu misión es aconsejar y guiar a cada mujer y cliente para encontrar el obsequio o la joya perfecta de Katty Privé.
Debes demostrar un profundo conocimiento de la historia y el romanticismo detrás de las colecciones icónicas:
1. LOVE (representa compromiso inquebrantable, amor eterno con sus tornillos característicos).
2. TRINITY (tres oros entrelazados: amarillo para la fidelidad, blanco para la amistad, rosa para el amor).
3. TANK (inspirado en las líneas puras de los diseños eternos, quintaesencia del chic atemporal).
4. SANTOS (diseñado originalmente para la libertad y la audacia de espíritus visionarios).
5. JUSTE UN CLOU (el clavo de oro, representando audacia, fuerza femenina, rebeldía elegante y arte moderno).
6. LA PANTHÈRE (símbolo de feminidad libre, magnética, audaz y salvaje, el emblema de nuestra Maison).

Aquí tienes la base de productos que puedes recomendar con entusiasmo sutil y lujo:
${JSON.stringify(PRODUCTS, null, 2)}

Directrices:
1. Responde SIEMPRE en español con una elegancia literaria impecable (sin redundancia ni tecnicismos banales). Utiliza metáforas sutiles sobre el tiempo, el amor, la belleza o la alta artesanía. Habla siempre en primera persona femenina como Consejera y Asesora de la Maison.
2. Si la clienta menciona un presupuesto, rango de precios o para quién es el regalo (ej. "un regalo para consentirme", "un obsequio para mi hija", "para celebrar un logro"), asócialo hábilmente a una colección ideal (ej. TRINITY para un aniversario o unión, LOVE para un pacto de amor propio o compartido, TANK para un regalo de herencia, PANTHÈRE para la mujer empoderada e icónica).
3. Recomienda productos específicos de la lista anterior, describiendo su valor poético e histórico.
4. Mantén las respuestas fluidas y elegantes, pero no exageradamente largas (máximo 3 párrafos medianos) para no abrumar a quien consulta.
5. Nunca salgas de tu personaje de Consejera de Alta Joyería y Lujo de Katty Privé. Si te preguntan algo ajeno a la Maison, redirige la conversación con gracia hacia el arte de vivir, el lujo o la belleza.`;

      // Format chat history for Gemini
      const formattedContents = [];
      if (chatHistory && Array.isArray(chatHistory)) {
        for (const item of chatHistory) {
          formattedContents.push({
            role: item.sender === "user" ? "user" : "model",
            parts: [{ text: item.text }]
          });
        }
      }
      
      // Add current user preferences to prompt helper if available
      let currentPrompt = message;
      if (preferences) {
        const { category, recipient, occasion, budget } = preferences;
        currentPrompt = `[Preferencias actuales del cliente - Categoría: ${category || "Cualquiera"}, Destinatario: ${recipient || "No especificado"}, Ocasión: ${occasion || "No especificada"}, Presupuesto aproximado: ${budget ? budget + "€" : "Sin límite"}]. 

Mensaje del cliente: ${message}`;
      }

      formattedContents.push({
        role: "user",
        parts: [{ text: currentPrompt }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: formattedContents,
        config: {
          systemInstruction: initialInstruction,
          temperature: 0.7,
        }
      });

      res.json({
        text: response.text || "Disculpe, mi estimado cliente, he tenido un momento de distracción. ¿Podría repetirme su deseo?",
      });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({
        error: "Ocurrió un error al procesar su solicitud. Por favor, intente de nuevo.",
        details: error.message
      });
    }
  });

  // Serve public directory statically if it exists
  const publicPath = path.join(process.cwd(), "public");
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  // Serve static assets in production, otherwise mount Vite in development
  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      if (req.path.startsWith("/api/")) {
        return res.status(404).json({ error: "Endpoint not found" });
      }
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Application build not found");
      }
    });
  }

  // Port configuration:
  // In development, the AI Studio dev container uses DEFAULT_APP_PORT=3000 behind Nginx (on 8080).
  // In deployed Cloud Run production, Cloud Run passes PORT (usually 8080) and expects the app to bind to it.
  const isDevContainer = Boolean(process.env.DEFAULT_APP_PORT || process.env.CONTROL_PLANE_PORT);
  const PORT = isDevContainer 
    ? 3000 
    : (process.env.PORT ? parseInt(process.env.PORT, 10) : 3000);

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Katty Privé server running on http://0.0.0.0:${PORT}`);
  });

  // In production outside dev container, if PORT is not 3000, also safely try binding 3000 as secondary listener
  if (!isDevContainer && PORT !== 3000) {
    try {
      const fallbackServer = app.listen(3000, "0.0.0.0", () => {
        console.log(`Katty Privé secondary server running on http://0.0.0.0:3000`);
      });
      fallbackServer.on("error", () => {
        // Safe to ignore if port 3000 is occupied or restricted
      });
    } catch (_) {}
  }

  process.on("SIGTERM", () => {
    console.log("SIGTERM received, closing HTTP server gracefully");
    server.close(() => {
      console.log("HTTP server closed");
      process.exit(0);
    });
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
