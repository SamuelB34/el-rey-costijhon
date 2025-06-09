"use client"
import styles from "./WhatsApp.module.scss"
import Image from "next/image"
import { usePedido } from "@/shared/store/PedidoContext"

export const WhatsApp = () => {
	const { pedido } = usePedido()

	const mensaje = `Hola!%0AMe%20gustaria%20hacer%20un%20pedido%20de:%0A${pedido
		.map((item) => `- ${item.quantity}x ${item.name}`)
		.join("%0A")}`

	const numeroWhatsApp = "5216861667777"
	const href = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`

	return (
		<a href={href} target="_blank" className={styles.whatsapp}>
			<Image
				src={"/icons/whatsapp.svg"}
				alt={"whatsapp"}
				width={42}
				height={42}
			/>
			<span className={styles.whatsapp__txt}>¡Haz tu pedido!</span>
		</a>
	)
}
