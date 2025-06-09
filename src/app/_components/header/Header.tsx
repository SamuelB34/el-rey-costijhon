"use client"
import { WebHamburger } from "@/shared/web-hamburger/WebHamburger"
import { useEffect, useState } from "react"
import styles from "./Header.module.scss"
import Image from "next/image"
import { usePedido } from "@/shared/store/PedidoContext"

export const Header = () => {
	const { pedido, setShowCart } = usePedido()
	const [checked, setChecked] = useState<boolean>(false)
	const [articlesCount, setArticlesCount] = useState(0)

	useEffect(() => {
		const totalQuantity = pedido.reduce(
			(total, item) => total + item.quantity,
			0
		)
		setArticlesCount(totalQuantity)
	}, [pedido])

	return (
		<div className={styles.header}>
			<WebHamburger
				checked={checked}
				onClick={() => {
					setChecked(!checked)
				}}
			/>
			<Image src={"/logo.svg"} alt={"logo"} width="113" height="42" />
			<div
				className={styles.cart}
				onClick={() => {
					setShowCart(true)
				}}
			>
				<div className={styles.cart__count}>
					<span>{articlesCount}</span>
				</div>
				<Image src={"/icons/cart.svg"} alt={"cart"} width="24" height="24" />
			</div>
		</div>
	)
}
