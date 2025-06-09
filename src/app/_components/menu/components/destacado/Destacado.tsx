import styles from "./Destacado.module.scss"
import Image from "next/image"
import { currencyFormat } from "@/shared/functions/format"

export interface Product {
	name: string
	price: number
	quantity: number
}

interface DestacadoProps {
	imageUrl: string
	name: string
	price: number
	onClick: (product: Product) => void
}

export const Destacado = ({
	imageUrl,
	name,
	price,
	onClick,
}: DestacadoProps) => {
	return (
		<div
			className={styles.destacado}
			onClick={() => {
				onClick({
					name,
					price,
					quantity: 1,
				})
			}}
		>
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
