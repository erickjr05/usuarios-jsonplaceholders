import Link from "next/link";
import Script from "next/script";
//import "@/app/estilos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from "@/components/menu";
//import "bootstrap/dist/js/bootstrap.min.js"


export const metadata={
    title:"Hola con next",
    description:"Fronr-end con next",
}


export default function RootLayout({children}){
    return(
      <html>
        <body>
           {/* <Link className="menu" href="/chat">Chat</Link>
            <Link className="menu" href="/noticias">Noticias</Link>*/}
            <Menu />
            {children}
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></Script>
        </body>
      </html>
    );
}