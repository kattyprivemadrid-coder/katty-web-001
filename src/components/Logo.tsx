import React from "react";

export type LogoVariant = "full" | "emblem" | "text" | "horizontal";
export type LogoTheme = "original" | "gold" | "dark" | "white";
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  theme?: LogoTheme;
  showSubtitle?: boolean;
}

/**
 * Katty Privé Official Brand Logo Component
 * Incorporates the exact official uncompromised designs:
 * 1. "logo 001 logo sin fondo.png.png" (Emblem - variant="emblem")
 * 2. "logo 001 letras sin fondo.png.png" (Letters - variant="text")
 * 3. "logo 001 letras y logo sin fondo.png.png" (Full Logo - variant="full")
 * 4. Horizontal lockup (variant="horizontal") for Navbar & Footer
 */
export default function Logo({
  variant = "horizontal",
  size = "md",
  className = "",
  theme = "original",
  showSubtitle = false,
}: LogoProps) {
  // Dimensions map
  const emblemSizes: Record<LogoSize, number> = {
    xs: 32,
    sm: 42,
    md: 58,
    lg: 96,
    xl: 140,
    "2xl": 200,
  };

  const textWidths: Record<LogoSize, number> = {
    xs: 115,
    sm: 150,
    md: 200,
    lg: 280,
    xl: 380,
    "2xl": 500,
  };

  const fullHeights: Record<LogoSize, number> = {
    xs: 50,
    sm: 75,
    md: 110,
    lg: 180,
    xl: 260,
    "2xl": 360,
  };

  const emblemPx = emblemSizes[size] || 58;
  const textPx = textWidths[size] || 200;
  const fullPx = fullHeights[size] || 110;

  // Filter styles based on theme
  const themeFilter =
    theme === "white"
      ? "brightness(0) invert(1)"
      : theme === "dark"
      ? "brightness(0.2) contrast(1.5)"
      : "none";

  // 1. EMBLEM ONLY (logo 001 logo sin fondo)
  if (variant === "emblem") {
    return (
      <div
        className={`inline-flex items-center justify-center select-none ${className}`}
        style={{ width: emblemPx, height: emblemPx }}
      >
        <img
          src="/logo-emblem.svg"
          alt="Katty Privé Emblem"
          className="w-full h-full object-contain pointer-events-none transition-all duration-300"
          style={{ filter: themeFilter }}
        />
      </div>
    );
  }

  // 2. TEXT ONLY (logo 001 letras sin fondo)
  if (variant === "text") {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center select-none ${className}`}
        style={{ width: textPx }}
      >
        <img
          src="/logo-text.svg"
          alt="Katty Privé"
          className="w-full h-auto object-contain pointer-events-none transition-all duration-300"
          style={{ filter: themeFilter }}
        />
        {showSubtitle && (
          <span className="text-[9px] tracking-[0.38em] uppercase font-light text-[#C4A87D] mt-1.5">
            Haute Joaillerie · Madrid
          </span>
        )}
      </div>
    );
  }

  // 3. FULL VERTICAL LOGO (logo 001 letras y logo sin fondo)
  if (variant === "full") {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center select-none text-center ${className}`}
        style={{ height: fullPx }}
      >
        <img
          src="/logo-full.svg"
          alt="Katty Privé Official Logo"
          className="h-full w-auto object-contain pointer-events-none transition-all duration-300"
          style={{ filter: themeFilter }}
        />
        {showSubtitle && (
          <span className="text-[9px] tracking-[0.38em] uppercase font-light text-[#C4A87D] mt-1">
            Haute Joaillerie · Madrid
          </span>
        )}
      </div>
    );
  }

  // 4. HORIZONTAL COMPOSITION (Emblem + Letters)
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <img
        src="/logo-emblem.svg"
        alt="Katty Privé Emblem"
        style={{ width: emblemPx * 0.85, height: emblemPx * 0.85, filter: themeFilter }}
        className="object-contain shrink-0 pointer-events-none"
      />
      <div className="flex flex-col justify-center">
        <img
          src="/logo-text.svg"
          alt="Katty Privé"
          style={{ width: textPx * 0.9, filter: themeFilter }}
          className="object-contain pointer-events-none"
        />
        {showSubtitle && (
          <span className="text-[8px] tracking-[0.35em] uppercase font-light text-[#C4A87D] mt-0.5">
            Madrid
          </span>
        )}
      </div>
    </div>
  );
}
