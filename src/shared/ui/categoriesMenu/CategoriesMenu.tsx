'use client'
import React from 'react'
import scss from './CategoriesMenu.module.scss'
import clsx from 'clsx'

interface ICategoriesMenuProps {
	activeCategory: string
	changeActiveCategory: (id: string) => void
	categories: {
		id: string
		title: string
	}[]
	type?: string
}

const CategoriesMenu: React.FC<ICategoriesMenuProps> = ({
	changeActiveCategory,
	activeCategory,
	categories,
	type
}) => {
	return (
		<ul className={clsx(scss.CategoriesMenu, scss[`${type}`])}>
			{Array.isArray(categories) &&
				categories.map(el => (
					<li
						key={el.id}
						onClick={() => changeActiveCategory(el.id)}
						className={clsx('flexCenter',{
							[scss.active]: activeCategory === el.id
						})}
					>
						<span>{el.title}</span>
					</li>
				))}
		</ul>
	)
}

export default CategoriesMenu
