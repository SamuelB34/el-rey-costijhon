"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"
import { Product } from "@/app/_components/menu/components/destacado/Destacado"

type PedidoContextType = {
	pedido: Product[]
	setPedido: (pedido: Product[]) => void
	addItem: (item: Product) => void
	clearPedido: () => void
}

const PedidoContext = createContext<PedidoContextType | undefined>(undefined)

export const PedidoProvider = ({ children }: { children: ReactNode }) => {
	const [pedido, setPedido] = useState<Product[]>([])

	const addItem = (item: Product) => {
		console.log("🛒 Agregando:", item)
		setPedido((prev) => {
			const index = prev.findIndex(
				(p) => p.name === item.name && p.price === item.price
			)

			if (index !== -1) {
				const updated = [...prev]
				const existing = { ...updated[index] } // 👈 clona para evitar mutación por referencia
				existing.quantity += 1 // 👈 suma manualmente 1, no item.quantity
				updated[index] = existing
				return updated
			}

			// 👇 también clona aquí por si viene de una ref compartida
			return [...prev, { ...item, quantity: 1 }]
		})
	}

	const clearPedido = () => {
		setPedido([])
	}

	return (
		<PedidoContext.Provider value={{ pedido, setPedido, addItem, clearPedido }}>
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
