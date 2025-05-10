import styles from "./WhatsApp.module.scss"
import Image from "next/image"

export const WhatsApp = () => {
	return (
		<a
			href="https://wa.me/5216861667777?text=Hola%21%0AMe%20gustaria%20hacer%20un%20pedido%20de%3A"
			target="_blank"
			className={styles.whatsapp}
		>
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
