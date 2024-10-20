/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react'
import scss from './MenuResults.module.scss'
import { foodItems } from '@/shared/const/foodItems'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import CImage from '@/shared/ui/Image'

interface IMenuResultsProps {
	foodItems: typeof foodItems
}
const MenuResults: React.FC<IMenuResultsProps> = ({ foodItems }) => {
	const [activeFood, setActiveFood] = useState<string | null>(null)
	const changeActiveFood = (id: string) => setActiveFood(id)
	const activeFoodItem = useMemo(
		() => foodItems.find(item => item.id === activeFood),
		[activeFood, foodItems]
	)

	const extras = [
		{ name: 'Cherry', price: 0.9 },
		{ name: 'Olives', price: 0.75 }
	]

	const drinks = [
		{ name: 'Coca Cola', price: 0.9 },
		{ name: 'Sprite', price: 0.85 }
	]

	return (
		<div>
			{activeFood && activeFoodItem && (
				<motion.div
					key={activeFood}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.4 }}
					className={scss.activeFood}	
				>
					<div
						className={clsx(scss['left'], scss.foodItems__card, {
							[scss.active]: activeFood && activeFoodItem
						})}
					>
						<Card {...activeFoodItem} />
					</div>
					<div className={scss['right']}>
						<div className={scss['col']}>
							<h4>Extras</h4>
							{extras.map(({ name, price }) => (
								<div className={scss['row']} key={name}>
									<span>{name}</span>
									<span>${price.toFixed(2)}</span>
								</div>
							))}
						</div>
						<div className={scss['col']}>
							<h4>Drinks</h4>
							{drinks.map(({ name, price }) => (
								<div className={scss['row']} key={name}>
									<span>{name}</span>
									<span>${price.toFixed(2)}</span>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			)}
			{foodItems.length == 0 ? (
				<div className={scss.noItems}>
					<p>
						No items found matching your search criteria. Please try again with
						different keywords.
					</p>
				</div>
			) : (
				<div className={scss.FoodItems}>
					{foodItems.map(({ name, id, ...item }) => (
						<motion.button
							onClick={() => changeActiveFood(id)}
							key={name}
							className={scss.foodItems__card}
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 1 }}
						>
							<Card {...item} name={name} />
						</motion.button>
					))}
				</div>
			)}
		</div>
	)
}

function Card({
	name,
	price,
	imageSrc,
	ingredients
}: Omit<(typeof foodItems)[0], 'id'>) {
	return (
		<>
			<figure className={scss.image_figure}>
				<CImage url={imageSrc} alt={name} width={329} height={195} />
			</figure>
			<div className={scss.content}>
				<div className={scss.column}>
					<h4>{name}</h4>
					<ul className={scss.ingredients}>
						{ingredients.slice(0, 4).map((ingredient, idx) => (
							<li key={ingredient}>
								{ingredient}
								{idx < ingredients.length - 1 && ','}
							</li>
						))}
					</ul>
				</div>
				<span>${price.toFixed(2)}</span>
			</div>
		</>
	)
}

export default MenuResults
