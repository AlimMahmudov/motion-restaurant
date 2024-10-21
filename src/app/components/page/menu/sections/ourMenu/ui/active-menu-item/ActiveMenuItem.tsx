import React, { memo } from 'react'
import { motion } from 'framer-motion'
import scss from './ActiveMenuItem.module.scss'
import clsx from 'clsx'
import MenuCard from '../menu-card/MenuCard'
import { foodItems } from '@/shared/const/foodItems'
interface IActiveMenuItemProps {
	styles: {
		readonly [key: string]: string
	}
	menuItem: (typeof foodItems)[0]
	activeItem: string
}

const extras = [
	{ name: 'Cherry', price: 0.9 },
	{ name: 'Olives', price: 0.75 }
]

const drinks = [
	{ name: 'Coca Cola', price: 0.9 },
	{ name: 'Sprite', price: 0.85 }
]

const ActiveMenuItem: React.FC<IActiveMenuItemProps> = memo(
	({ styles, menuItem, activeItem }) => {
		return (
			<motion.div
				key={activeItem}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.4 }}
				className={scss.activeItem}
			>
				<div
					className={clsx(scss['left'], styles.foodItems__card, {
						[styles.active]: activeItem && menuItem
					})}
				>
					<MenuCard {...menuItem} />
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
		)
	}
)

export default ActiveMenuItem
