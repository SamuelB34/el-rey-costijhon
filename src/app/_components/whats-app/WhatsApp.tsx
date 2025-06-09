"use client"
import styles from "./WhatsApp.module.scss"
import Image from "next/image"
import { usePedido } from "@/shared/store/PedidoContext"
import toast from "react-hot-toast"

export const WhatsApp = () => {
	const { pedido, showCart, setShowCart, nombre, entregaDomicilio, domicilio } =
		usePedido()

	const mensaje = `Hola!%0AMe%20gustaria%20hacer%20un%20pedido%20de:%0A${pedido
		.map((item) => `- ${item.quantity}x ${item.name}`)
		.join("%0A")}%0A%0AA%20nombre%20de:%20${encodeURIComponent(nombre)}${
		entregaDomicilio
			? `%0AEntrega%20a%20domicilio%2C%20a%20la%20direccion%3A%20${encodeURIComponent(
					domicilio
				)}`
			: "%0ARecogeria%20en%20el%20local"
	}`

	const numeroWhatsApp = "5216861667777"
	const href = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`

	const handleClick = (e: React.MouseEvent) => {
		if (!showCart) {
			e.preventDefault()
			setShowCart(true)
			return
		}

		// 🔒 Validaciones
		if (pedido.length === 0) {
			toast.error("Tu carrito está vacío.")
			return
		}

		if (!nombre.trim()) {
			toast.error("Por favor escribe tu nombre.")
			return
		}

		if (entregaDomicilio && !domicilio.trim()) {
			toast.error("Por favor escribe tu domicilio para la entrega.")
			return
		}

		// ✅ Todo bien, abre WhatsApp
		window.open(href, "_blank")
	}

	return (
		<button
			className={`${styles.whatsapp} ${
				showCart ? styles.whatsapp__large : styles.whatsapp__short
			}`}
			onClick={handleClick}
		>
			<Image
				src={"/icons/whatsapp.svg"}
				alt={"whatsapp"}
				width={42}
				height={42}
			/>
			<span className={styles.whatsapp__txt}>¡Haz tu pedido!</span>
		</button>
	)
}
