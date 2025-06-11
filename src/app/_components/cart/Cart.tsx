"use client"
import styles from "./Cart.module.scss"
import { usePedido } from "@/shared/store/PedidoContext"
import Image from "next/image"
import { currencyFormat } from "@/shared/functions/format"
import { useState } from "react"

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
		saboresPorItem,
		setSaboresPorItem,
		notaPorItem,
		setNotaPorItem,
	} = usePedido()

	const [moreDetailsIndex, setMoreDetailsIndex] = useState(-1)

	const handleSaborChange = (index: number, sabor: string) => {
		setSaboresPorItem((prev) => {
			const actuales = prev[index] ?? []

			let nuevos: string[] = []

			if (actuales.includes(sabor)) {
				nuevos = actuales.filter((s: any) => s !== sabor)
			} else {
				if (actuales.length < 2) {
					nuevos = [...actuales, sabor]
				} else {
					nuevos = [actuales[1], sabor]
				}
			}

			return {
				...prev,
				[index]: nuevos,
			}
		})
	}

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
								<div key={index} className={styles.row}>
									<div className={styles.articles}>
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

									{moreDetailsIndex === index && (
										<div>
											{item.type === "costillas" && (
												<div className={styles.sabores}>
													<p className={styles.checkbox}>
														Selecciona hasta 2 sabores:
													</p>
													{["BBQ", "Chimichurri", "Pastor", "Natural"].map(
														(sabor) => (
															<label key={sabor} className={styles.checkbox}>
																<input
																	type="checkbox"
																	checked={
																		saboresPorItem[index]?.includes(sabor) ||
																		false
																	}
																	onChange={() =>
																		handleSaborChange(index, sabor)
																	}
																/>
																{sabor}
															</label>
														)
													)}
												</div>
											)}

											{/* Siempre mostrar textarea para nota */}
											<div className={styles.nota}>
												<label className={styles.input}>
													Nota:
													<textarea
														className={styles.input}
														value={notaPorItem[index] || ""}
														onChange={(e) =>
															setNotaPorItem((prev) => ({
																...prev,
																[index]: e.target.value,
															}))
														}
													/>
												</label>
											</div>
										</div>
									)}

									<div
										className={styles.more_details}
										onClick={() =>
											setMoreDetailsIndex(
												moreDetailsIndex === index ? -1 : index
											)
										}
									>
										<span>Más detalles</span>
										<Image
											className={
												moreDetailsIndex === index
													? styles.more_details__chevron
													: ""
											}
											src={"/icons/chevron_down.svg"}
											alt={"down"}
											width={24}
											height={24}
										/>
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
