"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"
import { Product } from "@/app/_components/menu/components/destacado/Destacado"

type PedidoContextType = {
	pedido: Product[]
	setPedido: (pedido: Product[]) => void
	addItem: (item: Product) => void
	removeItem: (item: Product) => void
	clearPedido: () => void
	showCart: boolean
	setShowCart: (show: boolean) => void
	nombre: string
	setNombre: (nombre: string) => void
	entregaDomicilio: boolean
	setEntregaDomicilio: (val: boolean) => void
	domicilio: string
	setDomicilio: (domicilio: string) => void
}

const PedidoContext = createContext<PedidoContextType | undefined>(undefined)

export const PedidoProvider = ({ children }: { children: ReactNode }) => {
	const [pedido, setPedido] = useState<Product[]>([])
	const [showCart, setShowCart] = useState<boolean>(false)
	const [nombre, setNombre] = useState("")
	const [entregaDomicilio, setEntregaDomicilio] = useState(false)
	const [domicilio, setDomicilio] = useState("")

	const addItem = (item: Product) => {
		setPedido((prev) => {
			const index = prev.findIndex(
				(p) => p.name === item.name && p.price === item.price
			)

			if (index !== -1) {
				const updated = [...prev]
				const existing = { ...updated[index] }
				existing.quantity += 1
				updated[index] = existing
				return updated
			}
			return [...prev, { ...item, quantity: 1 }]
		})
	}

	const removeItem = (item: Product) => {
		setPedido((prev) => {
			const index = prev.findIndex(
				(p) => p.name === item.name && p.price === item.price
			)

			if (index !== -1) {
				const updated = [...prev]
				const existing = { ...updated[index] }

				if (existing.quantity <= 1) {
					// ❌ Remove item completely
					updated.splice(index, 1)
				} else {
					// ➖ Reduce quantity
					existing.quantity -= 1
					updated[index] = existing
				}
				return updated
			}

			return prev
		})
	}

	const clearPedido = () => {
		setPedido([])
	}

	return (
		<PedidoContext.Provider
			value={{
				pedido,
				setPedido,
				addItem,
				removeItem,
				clearPedido,
				showCart,
				setShowCart,
				nombre,
				setNombre,
				entregaDomicilio,
				setEntregaDomicilio,
				domicilio,
				setDomicilio,
			}}
		>
			{children}
		</PedidoContext.Provider>
	)
}

export const usePedido = (): PedidoContextType => {
	const context = useContext(PedidoContext)
	if (!context)
		throw new Error("usePedido debe usarse dentro de <PedidoProvider>")
	return context
}
