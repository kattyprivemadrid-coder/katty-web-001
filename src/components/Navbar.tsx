import React, { useState } from "react";
import { 
  Heart, 
  ShoppingBag, 
  Calendar, 
  Sparkles, 
  X, 
  Trash2, 
  MapPin, 
  User, 
  Clock,
  ArrowRight, 
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Instagram,
  Music2
} from "lucide-react";
import { Product, CartItem, Appointment, OrderCustomerDetails } from "../types";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface NavbarProps {
  cart: CartItem[];
  wishlist: Product[];
  appointments: Appointment[];
  soldOutProductIds?: string[];
  onCompletePurchase?: (customerDetails: OrderCustomerDetails, cartItems: CartItem[]) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, qty: number) => void;
  removeFromWishlist: (id: string) => void;
  addToCartFromWishlist: (product: Product) => void;
  cancelAppointment: (id: string) => void;
  onOpenGifting: () => void;
  onScrollToCatalog: () => void;
  onScrollToBoutique: () => void;
  onOpenEmailModal?: () => void;
}

export default function Navbar({
  cart,
  wishlist,
  appointments,
  soldOutProductIds = [],
  onCompletePurchase,
  removeFromCart,
  updateCartQuantity,
  removeFromWishlist,
  addToCartFromWishlist,
  cancelAppointment,
  onOpenGifting,
  onScrollToCatalog,
  onScrollToBoutique,
  onOpenEmailModal
}: NavbarProps) {
  const [activeDrawer, setActiveDrawer] = useState<"cart" | "wishlist" | "appointments" | null>(null);
  
  // Checkout flow states inside Cart Drawer
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "form" | "success">("cart");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [completedOrderSummary, setCompletedOrderSummary] = useState<{
    customer: OrderCustomerDetails;
    items: CartItem[];
    total: number;
    date: string;
  } | null>(null);

  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Escala de envío asegurado:
  // Inferior a 100€ -> 8€
  // Entre 100€ y 150€ -> 5€
  // Más de 150€ -> Gratis (0€)
  const getShippingFee = (amount: number) => {
    if (amount < 100) return 8;
    if (amount <= 150) return 5;
    return 0;
  };

  const currentShippingFee = getShippingFee(cartTotal);
  const currentGrandTotal = cartTotal + currentShippingFee;

  const handleStartCheckout = () => {
    setCheckoutStep("form");
  };

  const handleBackToCart = () => {
    setCheckoutStep("cart");
  };

  const handleValidateAndSubmitPurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!customerName.trim()) {
      errors.name = "Por favor ingrese su nombre y apellidos.";
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 6) {
      errors.phone = "Por favor ingrese un teléfono de contacto válido.";
    }
    if (!customerAddress.trim()) {
      errors.address = "Por favor ingrese la dirección de entrega de cortesía.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const customerDetails: OrderCustomerDetails = {
      clientName: customerName.trim(),
      clientPhone: customerPhone.trim(),
      clientEmail: customerEmail.trim() || "No especificado",
      deliveryAddress: customerAddress.trim(),
      notes: customerNotes.trim() || undefined
    };

    const orderItemsCopy = [...cart];
    const subtotalCopy = cartTotal;
    const shippingCopy = getShippingFee(subtotalCopy);
    const totalCopy = subtotalCopy + shippingCopy;
    const now = new Date();
    const dateFormatted = now.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    // Save summary before clearing cart
    setCompletedOrderSummary({
      customer: customerDetails,
      items: orderItemsCopy,
      total: totalCopy,
      date: dateFormatted
    });

    // Execute order completion (which updates sold-out status & sends WhatsApp to +34 632 89 26 57)
    if (onCompletePurchase) {
      onCompletePurchase(customerDetails, orderItemsCopy);
    }

    // Advance to success view
    setCheckoutStep("success");
  };

  const handleCloseDrawer = () => {
    setActiveDrawer(null);
    if (checkoutStep === "success") {
      setCheckoutStep("cart");
      setCompletedOrderSummary(null);
    }
  };

  return (
    <>
      {/* SECCIÓN 1: Barra superior de cortesía y contacto directo */}
      <div className="bg-[#120002] text-[#FAF9F6] py-2 px-4 border-b border-[#c5a880]/20 text-[11px] font-light">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="tracking-[0.2em] text-[#c5a880] uppercase text-[10px] hidden md:inline">
            Alta Costura & Joyería • Madrid
          </span>
          <div className="flex items-center gap-4 sm:gap-5 tracking-wider flex-wrap justify-center">
            <a 
              href="https://wa.me/34632892657?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20las%20colecciones%20de%20Katty%20Priv%C3%A9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#FAF9F6] hover:text-[#c5a880] transition-colors"
            >
              <MessageCircle size={12} className="text-[#25D366]" />
              <span className="font-mono text-[10px]">WhatsApp: +34 632 89 26 57</span>
            </a>
            <span className="text-[#c5a880]/40">|</span>
            <a 
              href="mailto:kattyprivemadrid@gmail.com" 
              onClick={(e) => {
                e.preventDefault();
                if (onOpenEmailModal) {
                  onOpenEmailModal();
                } else {
                  window.dispatchEvent(new CustomEvent("katty_open_email_modal"));
                }
              }}
              title="Escribir correo a Katty Privé (kattyprivemadrid@gmail.com)"
              className="flex items-center gap-1.5 text-[#FAF9F6] hover:text-[#c5a880] transition-colors cursor-pointer"
            >
              <Mail size={12} className="text-[#c5a880]" />
              <span className="text-[10px]">kattyprivemadrid@gmail.com</span>
            </a>
            <span className="text-[#c5a880]/40 hidden sm:inline">|</span>
            
            {/* Social Icons in Header */}
            <div className="flex items-center gap-2.5">
              <a 
                href="https://www.instagram.com/kattyprivemadrid" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram @kattyprivemadrid"
                aria-label="Instagram de Katty Privé"
                className="text-[#FAF9F6]/80 hover:text-[#c5a880] transition-colors p-0.5"
              >
                <Instagram size={12} />
              </a>
              <a 
                href="https://www.tiktok.com/@kattyprivemadrid" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="TikTok @kattyprivemadrid"
                aria-label="TikTok de Katty Privé"
                className="text-[#FAF9F6]/80 hover:text-[#c5a880] transition-colors p-0.5"
              >
                <Music2 size={12} />
              </a>
            </div>
          </div>
          <span className="tracking-[0.15em] text-[#FAF9F6]/60 text-[10px] uppercase hidden lg:inline">
            Envíos de cortesía asegurados
          </span>
        </div>
      </div>

      {/* SECCIÓN 2 & 3: Barra de Navegación de Alta Joyería */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/98 backdrop-blur-md border-b border-[#c5a880]/20 transition-all duration-300 shadow-sm">
        
        {/* 1.- PRIMERA LÍNEA HORIZONTAL: Logotipo y letras centrado */}
        <div className="border-b border-[#c5a880]/15 py-2 sm:py-2.5 flex items-center justify-center relative bg-[#FAF9F6]">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            title="Katty Privé • Inicio"
          >
            <Logo variant="horizontal" size="md" theme="original" />
          </div>
        </div>

        {/* 2.- SEGUNDA LÍNEA HORIZONTAL: Repartido proporcionalmente */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-1.5 sm:py-2 flex items-center justify-between sm:justify-around gap-2 sm:gap-4 md:gap-6 flex-wrap md:flex-nowrap">
          
          {/* Opción 1: Colecciones */}
          <button 
            onClick={onScrollToCatalog}
            className="text-[11px] sm:text-xs tracking-[0.18em] font-light uppercase text-[#121212]/85 hover:text-[#8c1d27] transition-colors cursor-pointer whitespace-nowrap py-1 relative group"
          >
            <span>Colecciones</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8c1d27] group-hover:w-full transition-all duration-300"></span>
          </button>

          <div className="h-3 w-px bg-[#c5a880]/25 hidden sm:block" />

          {/* Opción 2: Reserve su Cita */}
          <button 
            onClick={onScrollToBoutique}
            className="text-[11px] sm:text-xs tracking-[0.18em] font-normal uppercase text-[#8c1d27] hover:text-[#6a131b] transition-colors cursor-pointer whitespace-nowrap py-1 relative group"
          >
            <span>Reserve su Cita</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8c1d27]/40 group-hover:bg-[#8c1d27] transition-all duration-300"></span>
          </button>

          <div className="h-3 w-px bg-[#c5a880]/25 hidden sm:block" />

          {/* Opción 3: Consejera de Regalos */}
          <button 
            onClick={onOpenGifting}
            title="Consejera Virtual de Regalos Katty Privé"
            className="flex items-center gap-1.5 px-3 py-1 bg-[#120002] hover:bg-[#8c1d27] text-[#FAF9F6] border border-[#c5a880]/40 rounded-full text-[11px] tracking-wider transition-all duration-300 cursor-pointer shadow-sm group whitespace-nowrap"
          >
            <Sparkles size={12} className="text-[#c5a880] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-[0.12em] font-light hidden xs:inline sm:inline">
              Consejera de Regalos
            </span>
          </button>

          <div className="h-3 w-px bg-[#c5a880]/25 hidden md:block" />

          {/* Opción 4: Asesoría Directa por WhatsApp */}
          <a
            href="https://wa.me/34632892657?text=Hola,%20deseo%20recibir%20asesor%C3%ADa%20personalizada%20de%20Katty%20Priv%C3%A9"
            target="_blank"
            rel="noopener noreferrer"
            title="Atención y Asesoría por WhatsApp (+34 632 89 26 57)"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-[#c5a880]/10 hover:bg-[#c5a880]/20 border border-[#c5a880]/30 rounded-full text-[10px] font-mono text-[#120002] transition-colors whitespace-nowrap"
          >
            <Phone size={11} className="text-[#8c1d27]" />
            <span className="tracking-wider text-[10px]">+34 632 89 26 57</span>
          </a>

          <div className="h-3 w-px bg-[#c5a880]/25 hidden sm:block" />

          {/* Grupo de Iconos / Acciones rápidas */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* 1.- Mis Citas Planificadas (Calendario) */}
            <button
              onClick={() => setActiveDrawer("appointments")}
              className="p-1.5 text-[#121212] hover:text-[#8c1d27] transition-colors relative cursor-pointer group"
              title="Mis Citas Planificadas"
            >
              <Calendar size={17} className="group-hover:scale-110 transition-transform" />
              {appointments.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c5a880] text-[#120002] text-[8px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center shadow">
                  {appointments.length}
                </span>
              )}
            </button>

            {/* 2.- Lista de Deseos (Corazón) */}
            <button
              onClick={() => setActiveDrawer("wishlist")}
              className="p-1.5 text-[#121212] hover:text-[#8c1d27] transition-colors relative cursor-pointer group"
              title="Lista de Deseos"
            >
              <Heart size={17} className="group-hover:scale-110 transition-transform" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8c1d27] text-white text-[8px] font-medium h-3.5 w-3.5 rounded-full flex items-center justify-center shadow">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* 3.- Bolsa de Compras (Bolsa) */}
            <button
              onClick={() => {
                setActiveDrawer("cart");
                if (checkoutStep === "success") {
                  setCheckoutStep("cart");
                }
              }}
              className="p-1.5 text-[#121212] hover:text-[#8c1d27] transition-colors relative cursor-pointer group"
              title="Bolsa de Compras"
            >
              <ShoppingBag size={17} className="group-hover:scale-110 transition-transform" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#120002] border border-[#c5a880] text-[#c5a880] text-[8px] font-semibold h-3.5 w-3.5 rounded-full flex items-center justify-center shadow">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* DRAWERS PANEL CONTAINER (wishlist, cart, appointments) */}
      <AnimatePresence>
        {activeDrawer && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDrawer}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-screen w-full sm:w-[480px] bg-[#FAF9F6] shadow-2xl border-l border-[#c5a880]/20 z-50 flex flex-col pointer-events-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#c5a880]/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {activeDrawer === "cart" && checkoutStep === "form" && (
                    <button
                      onClick={handleBackToCart}
                      className="p-1 text-[#121212]/60 hover:text-[#8c1d27] transition-colors cursor-pointer mr-1"
                      title="Volver a la bolsa"
                    >
                      <ArrowLeft size={18} />
                    </button>
                  )}
                  <h3 className="font-serif text-xl font-medium uppercase tracking-wider text-[#120002]">
                    {activeDrawer === "cart" && (
                      checkoutStep === "cart" 
                        ? "Bolsa de Compra" 
                        : checkoutStep === "form" 
                        ? "Formalizar Pedido" 
                        : "Pedido Confirmado"
                    )}
                    {activeDrawer === "wishlist" && "Lista de Deseos"}
                    {activeDrawer === "appointments" && "Mis Citas Planificadas"}
                  </h3>
                </div>
                <button
                  onClick={handleCloseDrawer}
                  className="p-2 text-[#121212] hover:text-[#8c1d27] transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* SHOPPING CART DRAWER */}
                {activeDrawer === "cart" && (
                  <>
                    {/* STEP 1: CART ITEMS REVIEW */}
                    {checkoutStep === "cart" && (
                      cart.length === 0 ? (
                        <div className="h-64 flex flex-col items-center justify-center text-center space-y-4">
                          <ShoppingBag size={48} className="text-[#c5a880]/40" />
                          <p className="text-sm font-light text-[#121212]/60 uppercase tracking-widest">
                            Su bolsa está vacía
                          </p>
                          <button
                            onClick={() => { setActiveDrawer(null); onScrollToCatalog(); }}
                            className="text-xs text-[#8c1d27] border-b border-[#8c1d27] uppercase tracking-wider font-medium py-1 cursor-pointer"
                          >
                            Explorar Colecciones
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {cart.map((item) => {
                            const itemStatus = item.product.availability || (soldOutProductIds.includes(item.product.id) || item.product.isAvailable === false ? "sold_out" : "available");
                            const isSoldOut = itemStatus === "sold_out";
                            const isComingSoon = itemStatus === "coming_soon";
                            return (
                              <div key={item.product.id} className="flex space-x-4 pb-4 border-b border-[#c5a880]/10 relative">
                                <div className="relative w-20 h-20 shrink-0">
                                  <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-full h-full object-cover border border-[#c5a880]/20 bg-white"
                                  />
                                  {isSoldOut && (
                                    <div className="absolute inset-0 bg-rose-950/70 flex items-center justify-center">
                                      <span className="text-[8px] font-mono text-white font-bold uppercase tracking-wider bg-rose-600 px-1 py-0.5 rounded-xs">
                                        Agotado
                                      </span>
                                    </div>
                                  )}
                                  {isComingSoon && (
                                    <div className="absolute inset-0 bg-amber-950/70 flex items-center justify-center">
                                      <span className="text-[8px] font-mono text-white font-bold uppercase tracking-wider bg-amber-600 px-1 py-0.5 rounded-xs">
                                        Próximamente
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-start justify-between gap-1">
                                      <h4 className="font-serif text-sm font-medium text-[#120002] leading-tight">
                                        {item.product.name}
                                      </h4>
                                    </div>
                                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                      <p className="text-[11px] font-light text-[#121212]/50 capitalize">
                                        {item.product.category === "clothing" ? "Ropa" : item.product.category}
                                      </p>
                                      {item.selectedSize && (
                                        <span className="text-[10px] font-mono text-[#8c1d27] font-semibold bg-[#8c1d27]/10 border border-[#8c1d27]/25 px-1.5 py-0.2 rounded-xs uppercase">
                                          Talla: {item.selectedSize}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs font-mono text-[#8c1d27] mt-1 font-semibold">
                                      {item.product.price.toLocaleString("es-ES")} €
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-between mt-2">
                                    {/* Quantity control */}
                                    <div className="flex items-center space-x-2 border border-[#c5a880]/30 px-2 py-1 bg-white">
                                      <button 
                                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                                        className="text-xs hover:text-[#8c1d27] px-1 cursor-pointer"
                                      >
                                        -
                                      </button>
                                      <span className="text-xs w-4 text-center font-light">{item.quantity}</span>
                                      <button 
                                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                                        className="text-xs hover:text-[#8c1d27] px-1 cursor-pointer"
                                      >
                                        +
                                      </button>
                                    </div>
                                    {/* Remove */}
                                    <button
                                      onClick={() => removeFromCart(item.product.id)}
                                      className="text-xs text-[#121212]/40 hover:text-[#8c1d27] transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                      <Trash2 size={13} />
                                      Eliminar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )
                    )}

                    {/* STEP 2: CHECKOUT FORM */}
                    {checkoutStep === "form" && (
                      <form onSubmit={handleValidateAndSubmitPurchase} className="space-y-4">
                        <div className="bg-[#c5a880]/10 border border-[#c5a880]/30 p-3.5 rounded-xs space-y-1">
                          <div className="flex items-center gap-1.5 text-[#120002] font-medium text-xs">
                            <ShieldCheck size={14} className="text-[#8c1d27]" />
                            <span className="tracking-wide">Atención y Envío Privado</span>
                          </div>
                          <p className="text-[11px] text-[#121212]/70 font-light leading-relaxed">
                            Al confirmar, los detalles de la compra se comunicarán de inmediato al WhatsApp oficial de la Maison (+34 632 89 26 57) y las piezas quedarán reservadas a su nombre (No Disponibles).
                          </p>
                        </div>

                        {/* Customer Name */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono tracking-widest uppercase text-[#121212]/70 block">
                            Nombre y Apellidos *
                          </label>
                          <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="Ej. Condesa Beatriz de Silva"
                            className="w-full bg-white border border-[#c5a880]/30 focus:border-[#8c1d27] px-3 py-2 text-xs text-[#120002] outline-none rounded-xs"
                          />
                          {formErrors.name && (
                            <span className="text-[10px] text-red-600 block">{formErrors.name}</span>
                          )}
                        </div>

                        {/* Customer Phone */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono tracking-widest uppercase text-[#121212]/70 block">
                            Teléfono de Contacto (WhatsApp) *
                          </label>
                          <input
                            type="tel"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            placeholder="Ej. +34 600 00 00 00"
                            className="w-full bg-white border border-[#c5a880]/30 focus:border-[#8c1d27] px-3 py-2 text-xs text-[#120002] outline-none rounded-xs"
                          />
                          {formErrors.phone && (
                            <span className="text-[10px] text-red-600 block">{formErrors.phone}</span>
                          )}
                        </div>

                        {/* Customer Email */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono tracking-widest uppercase text-[#121212]/70 block">
                            Correo Electrónico (Opcional)
                          </label>
                          <input
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            placeholder="cliente@ejemplo.com"
                            className="w-full bg-white border border-[#c5a880]/30 focus:border-[#8c1d27] px-3 py-2 text-xs text-[#120002] outline-none rounded-xs"
                          />
                        </div>

                        {/* Customer Address */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono tracking-widest uppercase text-[#121212]/70 block">
                            Dirección de Entrega Asegurada *
                          </label>
                          <textarea
                            rows={2}
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            placeholder="Calle, número, piso/puerta, código postal y ciudad"
                            className="w-full bg-white border border-[#c5a880]/30 focus:border-[#8c1d27] px-3 py-2 text-xs text-[#120002] outline-none rounded-xs resize-none"
                          />
                          {formErrors.address && (
                            <span className="text-[10px] text-red-600 block">{formErrors.address}</span>
                          )}
                        </div>

                        {/* Notes / Special Requests */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono tracking-widest uppercase text-[#121212]/70 block">
                            notas o solicitudes
                          </label>
                          <input
                            type="text"
                            value={customerNotes}
                            onChange={(e) => setCustomerNotes(e.target.value)}
                            placeholder="notas"
                            className="w-full bg-white border border-[#c5a880]/30 focus:border-[#8c1d27] px-3 py-2 text-xs text-[#120002] outline-none rounded-xs"
                          />
                        </div>

                        {/* Mini Order Summary */}
                        <div className="border-t border-[#c5a880]/20 pt-3 space-y-1.5 text-xs">
                          <div className="flex justify-between text-[#121212]/70">
                            <span>Artículos ({cart.reduce((a, b) => a + b.quantity, 0)}):</span>
                            <span className="font-mono">{cartTotal.toLocaleString("es-ES")} €</span>
                          </div>
                          <div className="flex justify-between text-[#121212]/70">
                            <span>Gastos de envío:</span>
                            {currentShippingFee === 0 ? (
                              <span className="text-emerald-700 font-medium font-mono">Gratis</span>
                            ) : (
                              <span className="text-[#8c1d27] font-medium font-mono">
                                {currentShippingFee.toLocaleString("es-ES")} €
                              </span>
                            )}
                          </div>
                          <div className="flex justify-between text-sm font-serif font-medium text-[#120002] pt-1 border-t border-[#c5a880]/15">
                            <span>Total de la Compra:</span>
                            <span className="font-mono text-[#8c1d27] text-base">{currentGrandTotal.toLocaleString("es-ES")} €</span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#120002] hover:bg-[#8c1d27] text-white py-3.5 px-4 font-light tracking-[0.15em] uppercase text-[11px] leading-relaxed transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4 text-center"
                        >
                          <Lock size={14} className="shrink-0" />
                          <span>COMPRA CONFIRMADA EN UNOS INSTANTES RECIBIRÁ NUESTRA COMUNICACIÓN. GRACIAS POR SU COMPRA</span>
                        </button>
                      </form>
                    )}

                    {/* STEP 3: ORDER CONFIRMED SUCCESS VIEW */}
                    {checkoutStep === "success" && completedOrderSummary && (
                      <div className="space-y-6 text-center py-4">
                        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800 shadow">
                          <CheckCircle2 size={32} />
                        </div>

                        <div className="space-y-2">
                          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8c1d27] block">
                            Maison Katty Privé
                          </span>
                          <h4 className="font-serif text-xl sm:text-2xl font-light text-[#120002] uppercase tracking-wide">
                            COMPRA CONFIRMADA EN UNOS INSTANTES RECIBIRÁ NUESTRA COMUNICACIÓN. GRACIAS POR SU COMPRA
                          </h4>
                          <p className="text-xs font-light text-[#121212]/70 leading-relaxed max-w-sm mx-auto">
                            Los detalles del pedido han sido comunicados directamente a la central de la Maison vía WhatsApp (+34 632 89 26 57).
                          </p>
                        </div>

                        {/* Order Confirmation Card */}
                        <div className="bg-white border border-[#c5a880]/30 p-5 rounded-xs text-left space-y-4 shadow-sm text-xs">
                          <div className="border-b border-[#c5a880]/15 pb-2 flex justify-between items-center">
                            <span className="font-mono text-[10px] text-[#c5a880] uppercase">Titular</span>
                            <span className="font-medium text-[#120002]">{completedOrderSummary.customer.clientName}</span>
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[10px] text-[#c5a880] uppercase block">Piezas Adquiridas:</span>
                            <div className="space-y-1.5 pl-2 border-l-2 border-[#8c1d27]">
                              {completedOrderSummary.items.map((item) => (
                                <div key={item.product.id} className="flex justify-between items-center text-[11px]">
                                  <span className="font-serif text-[#120002]">
                                    {item.quantity}x {item.product.name}
                                  </span>
                                  <span className="font-mono text-[#8c1d27]">
                                    {(item.product.price * item.quantity).toLocaleString("es-ES")} €
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border-t border-[#c5a880]/15 pt-2 flex justify-between items-center text-sm font-serif font-medium">
                            <span>Importe Total:</span>
                            <span className="text-[#8c1d27] font-mono">{completedOrderSummary.total.toLocaleString("es-ES")} €</span>
                          </div>

                          <div className="bg-rose-50/70 border border-rose-200/60 p-2.5 rounded-xs text-[10.5px] text-rose-900 leading-snug">
                            <strong>Estado del Catálogo:</strong> Las piezas seleccionadas han pasado al estado <span className="font-bold underline">NO DISPONIBLE</span> en la Maison.
                          </div>
                        </div>

                        <button
                          onClick={handleCloseDrawer}
                          className="border border-[#c5a880] text-[#120002] hover:bg-[#120002] hover:text-white transition-colors py-3 px-8 text-xs font-light tracking-widest uppercase cursor-pointer block mx-auto"
                        >
                          Continuar Explorando Colecciones
                        </button>
                      </div>
                    )}
                  </>
                )}

                {/* WISHLIST DRAWER */}
                {activeDrawer === "wishlist" && (
                  wishlist.length === 0 ? (
                    <div className="h-64 flex flex-col items-center justify-center text-center space-y-4">
                      <Heart size={48} className="text-[#c5a880]/40" />
                      <p className="text-sm font-light text-[#121212]/60 uppercase tracking-widest">
                        Su lista de deseos está vacía
                      </p>
                      <button
                        onClick={() => { setActiveDrawer(null); onScrollToCatalog(); }}
                        className="text-xs text-[#8c1d27] border-b border-[#8c1d27] uppercase tracking-wider font-medium py-1 cursor-pointer"
                      >
                        Añadir piezas icónicas
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {wishlist.map((item) => {
                        const itemStatus = item.availability || (soldOutProductIds.includes(item.id) || item.isAvailable === false ? "sold_out" : "available");
                        const isSoldOut = itemStatus === "sold_out";
                        const isComingSoon = itemStatus === "coming_soon";
                        return (
                          <div key={item.id} className="flex space-x-4 pb-4 border-b border-[#c5a880]/10">
                            <div className="relative w-20 h-20 shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover border border-[#c5a880]/20 bg-white"
                              />
                              {isSoldOut && (
                                <div className="absolute inset-0 bg-rose-950/70 flex items-center justify-center">
                                  <span className="text-[8px] font-mono text-white font-bold uppercase tracking-wider bg-rose-600 px-1 py-0.5 rounded-xs">
                                    Agotado
                                  </span>
                                </div>
                              )}
                              {isComingSoon && (
                                <div className="absolute inset-0 bg-amber-950/70 flex items-center justify-center">
                                  <span className="text-[8px] font-mono text-white font-bold uppercase tracking-wider bg-amber-600 px-1 py-0.5 rounded-xs">
                                    Próximamente
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="font-serif text-sm font-medium text-[#120002]">{item.name}</h4>
                                <p className="text-xs font-mono text-[#8c1d27] mt-1">{item.price.toLocaleString("es-ES")} €</p>
                                {isSoldOut ? (
                                  <span className="text-[9px] font-mono text-rose-700 uppercase font-semibold block mt-0.5">
                                    ● Agotado
                                  </span>
                                ) : isComingSoon ? (
                                  <span className="text-[9px] font-mono text-amber-800 uppercase font-semibold block mt-0.5">
                                    ● Próximamente
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-mono text-emerald-700 uppercase font-semibold block mt-0.5">
                                    ● Pieza disponible
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 mt-2">
                                {isSoldOut ? (
                                  <button
                                    disabled
                                    className="flex-1 bg-rose-50 text-rose-700 text-[10px] font-mono font-bold tracking-wider uppercase py-1.5 cursor-not-allowed border border-rose-200 rounded-xs"
                                  >
                                    Agotado
                                  </button>
                                ) : isComingSoon ? (
                                  <button
                                    disabled
                                    className="flex-1 bg-amber-50 text-amber-800 text-[10px] font-mono font-bold tracking-wider uppercase py-1.5 cursor-not-allowed border border-amber-200 rounded-xs"
                                  >
                                    Próximamente
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => addToCartFromWishlist(item)}
                                    className="flex-1 bg-[#120002] hover:bg-[#8c1d27] text-white text-[11px] font-light tracking-widest uppercase py-1.5 transition-colors cursor-pointer rounded-xs"
                                  >
                                    Añadir a la bolsa
                                  </button>
                                )}
                                <button
                                  onClick={() => removeFromWishlist(item.id)}
                                  className="p-1.5 text-[#121212]/40 hover:text-[#8c1d27] border border-[#c5a880]/20 transition-colors cursor-pointer"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                )}

                {/* APPOINTMENTS DRAWER */}
                {activeDrawer === "appointments" && (
                  appointments.length === 0 ? (
                    <div className="h-64 flex flex-col items-center justify-center text-center space-y-4">
                      <Calendar size={48} className="text-[#c5a880]/40" />
                      <p className="text-sm font-light text-[#121212]/60 uppercase tracking-widest">
                        No tiene citas agendadas
                      </p>
                      <button
                        onClick={() => { setActiveDrawer(null); onScrollToBoutique(); }}
                        className="text-xs text-[#8c1d27] border-b border-[#8c1d27] uppercase tracking-wider font-medium py-1 cursor-pointer"
                      >
                        Reservar cita en Boutique
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {appointments.map((app) => (
                        <div key={app.id} className="p-4 bg-[#c5a880]/5 border border-[#c5a880]/20 rounded-sm space-y-3 relative">
                          <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[9px] font-medium px-2 py-0.5 rounded uppercase tracking-wider">
                            {app.status === "scheduled" ? "Confirmada" : "Cancelada"}
                          </span>
                          <div>
                            <h4 className="font-serif text-sm font-medium text-[#120002] pr-12">{app.service}</h4>
                            <p className="text-xs font-light text-[#121212]/70 flex items-center gap-1.5 mt-1">
                              <MapPin size={12} className="text-[#c5a880]" />
                              {app.boutique}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 border-t border-b border-[#c5a880]/15 py-2 text-xs">
                            <div className="flex items-center gap-1 text-[#121212]/60">
                              <Calendar size={12} />
                              {app.date}
                            </div>
                            <div className="flex items-center gap-1 text-[#121212]/60">
                              <Clock size={12} />
                              {app.time}
                            </div>
                          </div>

                          <div className="text-[11px] font-light text-[#121212]/60">
                            <span className="font-semibold text-[#120002]">Titular:</span> {app.clientName}
                          </div>

                          {app.status === "scheduled" && (
                            <button
                              onClick={() => cancelAppointment(app.id)}
                              className="w-full border border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600 text-[10px] font-light uppercase tracking-wider py-1.5 transition-colors mt-2 cursor-pointer"
                            >
                              Cancelar Reserva
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )
                )}

              </div>

              {/* Drawer Footer (Only for Cart in 'cart' review step) */}
              {activeDrawer === "cart" && checkoutStep === "cart" && cart.length > 0 && (
                <div className="p-6 border-t border-[#c5a880]/15 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wider text-[#121212]/60">Subtotal</span>
                    <span className="font-serif text-lg font-medium text-[#120002]">{cartTotal.toLocaleString("es-ES")} €</span>
                  </div>
                  <p className="text-[10px] font-light text-[#121212]/50">
                    Tasas e impuestos incluidos. Envíos de cortesía asegurados por la Maison.
                  </p>
                  <button
                    onClick={handleStartCheckout}
                    className="w-full bg-[#120002] hover:bg-[#8c1d27] text-white py-4 font-light tracking-[0.2em] uppercase text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    Proceder a Formalizar Pedido
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
