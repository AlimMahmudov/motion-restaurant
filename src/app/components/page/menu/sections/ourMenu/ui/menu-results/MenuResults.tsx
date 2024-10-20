/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react'
import scss from './MenuResults.module.scss'
import { foodItems } from '@/shared/const/foodItems'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import ActiveMenuItem from '../active-menu-item/ActiveMenuItem'
import MenuCard from '../menu-card/MenuCard'

interface IMenuResultsProps {
	foodItems: typeof foodItems
}
const MenuResults: React.FC<IMenuResultsProps> = ({ foodItems }) => {
	const [activeMenu, setActiveMenu] = useState<string | null>(null)
	const changeActiveMI = (id: string) => {
		setActiveMenu(id)
		window.scrollTo(0, 0)
	}
	const clearActiveMenu = () => {
		setActiveMenu(null)
		window.scrollTo(0, 0)
	}
	const activeMenuItem = useMemo(
		() => foodItems.find(item => item.id === activeMenu),
		[activeMenu, foodItems]
	)

	return (
		<div className={scss.parent}>
			{activeMenu && (
				<button
					onClick={clearActiveMenu}
					className={clsx(scss.clearMI, 'inlineFlexCenter')}
				>
					<svg
						width='41'
						height='41'
						viewBox='0 0 41 41'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.3834 40.1957C31.2219 40.1957 40.1956 31.2026 40.1956 20.3836C40.1956 9.54518 31.2024 0.571442 20.364 0.571442C9.54503 0.571442 0.571289 9.54518 0.571289 20.3836C0.571289 31.2026 9.56445 40.1957 20.3834 40.1957ZM20.3834 36.8937C11.2155 36.8937 3.89274 29.5516 3.89274 20.3836C3.89274 11.2156 11.196 3.87347 20.364 3.87347C29.532 3.87347 36.8741 11.2156 36.8936 20.3836C36.913 29.5516 29.5514 36.8937 20.3834 36.8937ZM13.7405 28.6192C14.1873 28.6192 14.5758 28.4444 14.8671 28.1336L20.364 22.5979L25.8998 28.1336C26.1911 28.425 26.5602 28.6192 27.0069 28.6192C27.8616 28.6192 28.5608 27.9006 28.5608 27.0459C28.5608 26.5992 28.4054 26.2301 28.0946 25.9388L22.5783 20.4224L28.1141 14.8673C28.4443 14.5371 28.5802 14.2069 28.5802 13.7795C28.5802 12.9055 27.881 12.2256 27.0263 12.2256C26.6184 12.2256 26.2882 12.3616 25.958 12.6918L20.364 18.247L14.8283 12.7112C14.5369 12.4005 14.1873 12.2645 13.7405 12.2645C12.8859 12.2645 12.1866 12.9249 12.1866 13.799C12.1866 14.2263 12.3615 14.5953 12.6528 14.8867L18.1691 20.4224L12.6528 25.9582C12.3615 26.2301 12.1866 26.6186 12.1866 27.0459C12.1866 27.9006 12.8859 28.6192 13.7405 28.6192Z'
							fill='white'
						/>
					</svg>
				</button>
			)}
			{activeMenu && activeMenuItem && (
				<ActiveMenuItem
					menuItem={activeMenuItem}
					activeItem={activeMenu}
					styles={scss}
				/>
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
					{foodItems.map(({ name, id, ...item }, idx) => (
						<motion.button
							onClick={() => changeActiveMI(id)}
							key={name}
							className={clsx(scss.foodItems__card, 'flexCol')}
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 1 }}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 * (idx + 1) }}
						>
							<MenuCard {...item} name={name} />
						</motion.button>
					))}
				</div>
			)}
		</div>
	)
}

export default MenuResults
