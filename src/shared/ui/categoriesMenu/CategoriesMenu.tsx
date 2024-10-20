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
}

const CategoriesMenu: React.FC<ICategoriesMenuProps> = ({
	changeActiveCategory,
	activeCategory,
	categories
}) => {
	return (
		<nav className={scss.CategoriesMenu}>
			<ul>
				{Array.isArray(categories) &&
					categories.map(el => (
						<li
							key={el.id}
							onClick={() => changeActiveCategory(el.id)}
							className={clsx({
								[scss.active]: activeCategory === el.id
							})}
						>
							<a>{el.title}</a>
						</li>
					))}
			</ul>
		</nav>
	)
}

export default CategoriesMenu
