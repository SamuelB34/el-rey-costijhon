import styles from "./Horario.module.scss"

export const Horario = () => {
	return (
		<div className={styles.horario}>
			<span className={styles.horario__title}>Horarios</span>
			<span className={styles.horario__text}>
				De jueves a domingo <br />
				11:00am - 7:00pm
			</span>
		</div>
	)
}
