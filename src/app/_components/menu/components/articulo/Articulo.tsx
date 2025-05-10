import styles from "./Articulo.module.scss"
import { currencyFormat } from "@/shared/functions/format"
import Image from "next/image"

interface ArticuloProps {
	name: string
	price: number
	description: string
	imageUrl: string
}

export const Articulo = ({
	name,
	price,
	description,
	imageUrl,
}: ArticuloProps) => {
	return (
		<div className={styles.articulo}>
			<div className={styles.articulo__left}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{currencyFormat(price)}</span>
				<span className={styles.description}>{description}</span>
			</div>
			<div className={styles.articulo__container}>
				<Image
					src={imageUrl}
					alt={"article"}
					width={137}
					height={121}
					className={styles.img}
				/>
			</div>
		</div>
	)
}
