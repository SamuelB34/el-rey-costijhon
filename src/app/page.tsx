import styles from "./page.module.scss"
import { Header } from "@/app/_components/header/Header"
import { Horario } from "@/app/_components/horario/Horario"
import { Ubicacion } from "@/app/_components/ubicacion/Ubicacion"
import { Menu } from "@/app/_components/menu/Menu"
import { WhatsApp } from "@/app/_components/whats-app/WhatsApp"
import { Cart } from "@/app/_components/cart/Cart"

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Header />
				<Horario />
				<Ubicacion />
				<Menu />
				<WhatsApp />
				<Cart />
			</main>
		</div>
	)
}
