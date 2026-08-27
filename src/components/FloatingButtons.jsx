const WHATSAPP_NUMBER = '917888128924' // country code + number, no + or spaces
const WHATSAPP_MESSAGE = "Hi Ratndeep! I came across your portfolio and I'd like to talk about a project."

export default function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    
    <a  href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50
                 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] shadow-lg
                 flex items-center justify-center
                 hover:scale-110 active:scale-95 transition-transform duration-300"
    >
      {/* Ripple rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ripple" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ripple [animation-delay:0.6s]" />

      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="relative z-10">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.49-9.84-10.01-9.84zm0 18.14a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.14 8.14 0 0 1-1.25-4.3c0-4.5 3.66-8.16 8.16-8.16 4.5 0 8.16 3.66 8.16 8.16s-3.66 8.14-8.16 8.14zm4.48-6.12c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
      </svg>
    </a>
  )
}