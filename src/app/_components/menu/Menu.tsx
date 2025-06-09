"use client"
import styles from "./Menu.module.scss"
import {
	Destacado,
	Product,
} from "@/app/_components/menu/components/destacado/Destacado"
import { Articulo } from "@/app/_components/menu/components/articulo/Articulo"
import {
	chicharrones,
	costillas,
	destacados,
	hamburguesas,
	papas,
} from "@/app/_components/menu/mock"
import { Fragment, useEffect } from "react"
import { usePedido } from "@/shared/store/PedidoContext"

export const Menu = () => {
	const { pedido, addItem } = usePedido()

	const addItemToPedido = (product: Product) => {
		addItem({ ...product, quantity: 1 })
	}

	return (
		<div className={styles.menu}>
			<span className={styles.menu__title}>Menu</span>
			<div className={styles.menu__destacados}>
				<span className={styles.subtitle}>Los destacados</span>
				<div className={styles.menu__scroll}>
					{destacados.map((destacado, index) => (
						<Fragment key={index}>
							<Destacado
								imageUrl={destacado.imageUrl}
								name={destacado.name}
								price={destacado.price}
								onClick={addItemToPedido}
							/>
						</Fragment>
					))}
				</div>
			</div>
			<div className={styles.separator}></div>
			{/*Costillas*/}
			<div className={styles.menu__destacados}>
				<span className={styles.subtitle}>Costillas</span>
				{costillas.map((costilla, index) => (
					<Fragment key={index}>
						<Articulo
							imageUrl={costilla.imageUrl}
							name={costilla.name}
							price={costilla.price}
							description={costilla.description}
							onClick={addItemToPedido}
						/>
					</Fragment>
				))}
			</div>
			<div className={styles.separator}></div>
			{/*Hamburguesas*/}
			<div className={styles.menu__destacados}>
				<span className={styles.subtitle}>Hamburguesas</span>
				{hamburguesas.map((hamburguesa, index) => (
					<Fragment key={index}>
						<Articulo
							imageUrl={hamburguesa.imageUrl}
							name={hamburguesa.name}
							price={hamburguesa.price}
							description={hamburguesa.description}
							onClick={addItemToPedido}
						/>
					</Fragment>
				))}
			</div>
			<div className={styles.separator}></div>
			{/*Papas*/}
			<div className={styles.menu__destacados}>
				<span className={styles.subtitle}>Papas</span>
				{papas.map((papa, index) => (
					<Fragment key={index}>
						<Articulo
							imageUrl={papa.imageUrl}
							name={papa.name}
							price={papa.price}
							description={papa.description}
							onClick={addItemToPedido}
						/>
					</Fragment>
				))}
			</div>
			<div className={styles.separator}></div>
			{/*Chicharrones*/}
			<div className={styles.menu__destacados}>
				<span className={styles.subtitle}>Chicharrones</span>
				{chicharrones.map((chicharron, index) => (
					<Fragment key={index}>
						<Articulo
							imageUrl={chicharron.imageUrl}
							name={chicharron.name}
							price={chicharron.price}
							description={chicharron.description}
							onClick={addItemToPedido}
						/>
					</Fragment>
				))}
			</div>
		</div>
	)
}
