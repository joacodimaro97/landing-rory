import { MessageCircle } from "lucide-react"


export default function LinkWhatsapp(){
    return(
        <a
      href="https://wa.me/5492227627929?text=%C2%A1Hola!%20Visité%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 md:bottom-10 right-2 z-50  transition-all duration-300"
      aria-label="Enviar mensaje por WhatsApp"
    >
     <span class="icon-[logos--whatsapp-icon] w-16 h-16 md:w-[6vw]  md:h-[6vh] hover:scale-[1.2] transition-all duration-300 "></span>
    </a>
    )
}