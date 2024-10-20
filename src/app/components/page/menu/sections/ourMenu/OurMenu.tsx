'use client'
import { foodItems } from '@/shared/const/foodItems'
import { useLanguageStore } from '@/shared/stores/language-store'
import CategoriesMenu from '@/shared/ui/categoriesMenu/CategoriesMenu'
import React, { useMemo } from 'react'
import scss from './OurMenu.module.scss'
import MenuResults from './ui/menu-results/MenuResults'

const OurMenu: React.FC<{ category_id?: string }> = ({ category_id }) => {
	const { $t } = useLanguageStore()

	const categories = $t<{ id: string; title: string }[]>(
		'homeSections.mainmenu.categories',
		'global'
	)
	const [activeCategory, setActiveCategory] = React.useState<string>(
		category_id ?? categories[0].id
	)

	const changeActiveCategory = (id: string) => {
		setActiveCategory(id)
	}

	const filteredSortedFoodItems = useMemo(() => {
		const filteredItems = foodItems.filter(
			({ categoryId }) => categoryId === activeCategory
		)

		const uniqueItems = filteredItems.reduce(
			(acc: typeof foodItems, current) => {
				const x = acc.find(item => item.name === current.name)
				if (!x) {
					return acc.concat([current])
				} else {
					return acc
				}
			},
			[]
		)

		return uniqueItems as typeof foodItems
	}, [activeCategory])

	return (
		<section className={scss.MainMenu}>
			<div className='container'>
				<div className={scss.MainMenu__inner}>
					<CategoriesMenu
						type="ourmenu"
						categories={categories}
						activeCategory={activeCategory}
						changeActiveCategory={changeActiveCategory}
					/>
					<MenuResults foodItems={filteredSortedFoodItems} />
				</div>
			</div>
		</section>
	)
}

export default OurMenu
