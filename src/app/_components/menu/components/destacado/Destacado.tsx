import styles from "./Destacado.module.scss"
import Image from "next/image"
import { currencyFormat } from "@/shared/functions/format"

interface DestacadoProps {
	imageUrl: string
	name: string
	price: number
}

export const Destacado = ({ imageUrl, name, price }: DestacadoProps) => {
	return (
		<div className={styles.destacado}>
			<div className={styles.destacado__container}>
				<Image
					src={imageUrl}
					alt={"article"}
					width={137}
					height={121}
					className={styles.img}
				/>
			</div>
			<span className={styles.destacado__name}>{name}</span>
			<span className={styles.destacado__price}>{currencyFormat(price)}</span>
		</div>
	)
}
