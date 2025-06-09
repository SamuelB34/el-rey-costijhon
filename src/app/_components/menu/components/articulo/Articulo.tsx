import styles from "./Articulo.module.scss"
import { currencyFormat } from "@/shared/functions/format"
import Image from "next/image"
import { Product } from "@/app/_components/menu/components/destacado/Destacado"

interface ArticuloProps {
	name: string
	price: number
	description: string
	imageUrl: string
	onClick: (product: Product) => void
}

export const Articulo = ({
	name,
	price,
	description,
	imageUrl,
	onClick,
}: ArticuloProps) => {
	return (
		<div className={styles.articulo}>
			<div
				className={styles.add}
				onClick={() => {
					onClick({
						name,
						price,
						quantity: 1,
					})
				}}
			>
				<Image src={"icons/plus.svg"} alt={"add"} width={20} height={20} />
			</div>
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
