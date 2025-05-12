import styles from "./Ubicacion.module.scss"
import Image from "next/image"

export const Ubicacion = () => {
	return (
		<div className={styles.ubicacion}>
			<span className={styles.ubicacion__title}>Ubicacion</span>
			<a
				href="https://maps.app.goo.gl/X89LnZRaFHUX7FvM7"
				target="_blank"
				className={styles.ubicacion__img}
			>
				<Image
					src={"/ubicacion/ubicacion.svg"}
					alt={"ubicacion"}
					width={358}
					height={154}
					className={styles.ubicacion__img}
				/>
			</a>
		</div>
	)
}
