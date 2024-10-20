'use client'
import React from 'react'
import scss from './CategoriesMenu.module.scss'
import clsx from 'clsx'
import { useLanguageStore } from '@/stores/language-store'

const CategoriesMenu = () => {
	const { $t } = useLanguageStore()
	const categories = $t<{ id: number; title: string }[]>(
		'homeSections.mainmenu.categories',
		'global'
	)
	const [activeCategory, setActiveCategory] = React.useState<number>(
		Array.isArray(categories) ? categories[0].id : 0
	)
	return (
		<nav className={scss.CategoriesMenu}>
			<ul>
				{Array.isArray(categories) &&
					categories.map(el => (
						<li
							key={el.id}
							onClick={() => setActiveCategory(el.id)}
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
