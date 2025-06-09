"use client"
import styles from "./Cart.module.scss"
import { usePedido } from "@/shared/store/PedidoContext"
import Image from "next/image"
import { currencyFormat } from "@/shared/functions/format"

export const Cart = () => {
	const {
		pedido,
		showCart,
		setShowCart,
		addItem,
		removeItem,
		nombre,
		setNombre,
		entregaDomicilio,
		setEntregaDomicilio,
		domicilio,
		setDomicilio,
	} = usePedido()

	return (
		<div
			className={`${styles.cart} ${showCart ? styles["cart--visible"] : styles["cart--hidden"]}`}
		>
			<div className={styles.content}>
				<div className={styles.x} onClick={() => setShowCart(!showCart)}>
					<Image src={"/icons/close.svg"} alt={"x"} width={24} height={24} />
				</div>
				<div>
					<span className={styles.cart__mi_pedido}>Mi pedido:</span>

					<div className={styles.cart__content}>
						{pedido.length > 0 ? (
							pedido.map((item, index) => (
								<div key={index} className={styles.articles}>
									<div className={styles.left}>
										<span className={styles.name}>{item.name}</span>
										<span className={styles.price}>
											{currencyFormat(item.price * item.quantity)}
										</span>
									</div>

									<div className={styles.quantityControls}>
										<button onClick={() => removeItem(item)}>-</button>
										<span>{item.quantity}</span>
										<button onClick={() => addItem(item)}>+</button>
									</div>
								</div>
							))
						) : (
							<div className={styles.basket}>
								<Image
									src={"/icons/empty-cart.svg"}
									alt={"basket"}
									width={24}
									height={24}
								/>
								<span className={styles.cart__empty}>
									Aún no tienes elementos en el carrito
								</span>
							</div>
						)}
					</div>
				</div>

				{pedido.length > 0 && (
					<div className={styles.cart__form}>
						<label className={styles.label}>
							A nombre de:
							<input
								type="text"
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
								className={styles.input}
							/>
						</label>

						<label className={styles.checkbox}>
							<input
								type="checkbox"
								checked={entregaDomicilio}
								onChange={(e) => setEntregaDomicilio(e.target.checked)}
							/>
							Entrega a domicilio
						</label>

						{entregaDomicilio && (
							<label className={styles.label}>
								Domicilio:
								<input
									type="text"
									value={domicilio}
									onChange={(e) => setDomicilio(e.target.value)}
									className={styles.input}
								/>
							</label>
						)}

						<div className={styles.total}>
							Total:{" "}
							{currencyFormat(
								pedido.reduce(
									(acc, item) => acc + item.price * item.quantity,
									0
								)
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
