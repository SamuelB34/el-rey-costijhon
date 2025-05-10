import styles from "./Menu.module.scss"
import { Destacado } from "@/app/_components/menu/components/destacado/Destacado"
import { Articulo } from "@/app/_components/menu/components/articulo/Articulo"
import { costillas, destacados } from "@/app/_components/menu/mock"
import { Fragment } from "react"

export const Menu = () => {
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
							/>
						</Fragment>
					))}
				</div>
			</div>
			<div className={styles.separator}></div>
			<div className={styles.menu__destacados}>
				<span className={styles.subtitle}>Costillas</span>
				{costillas.map((costilla, index) => (
					<Fragment key={index}>
						<Articulo
							imageUrl={costilla.imageUrl}
							name={costilla.name}
							price={costilla.price}
							description={costilla.description}
						/>
					</Fragment>
				))}
			</div>
		</div>
	)
}
