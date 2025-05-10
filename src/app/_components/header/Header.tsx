"use client"
import { WebHamburger } from "@/shared/web-hamburger/WebHamburger"
import { useState } from "react"
import styles from "./Header.module.scss"
import Image from "next/image"

export const Header = () => {
	const [checked, setChecked] = useState<boolean>(false)
	return (
		<div className={styles.header}>
			<WebHamburger
				checked={checked}
				onClick={() => {
					setChecked(!checked)
				}}
			/>
			<Image src={"/logo.svg"} alt={"logo"} width="113" height="42" />
			<Image src={"/icons/search.svg"} alt={"logo"} width="24" height="24" />
		</div>
	)
}
