'use client'
import { foodItems } from '@/shared/const/foodItems'
import { useLanguageStore } from '@/shared/stores/language-store'
import CategoriesMenu from '@/shared/ui/categoriesMenu/CategoriesMenu'
import Link from 'next/link'
import React, { memo, useCallback, useMemo } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import scss from './MainMenu.module.scss'
import SectionTitles from '@/shared/ui/title/SectionTitle'
import { motion } from 'framer-motion'
import useWindowSize from '@/shared/hooks/useWindowSize'

const MainMenu = memo(() => {
	const { $t } = useLanguageStore()
	const categories = $t<{ id: string; title: string }[]>(
		'homeSections.mainmenu.categories',
		'global'
	)
	const [activeCategory, setActiveCategory] = React.useState<string>(
		categories[0].id
	)
	const { width } = useWindowSize()
	const changeActiveCategory = useCallback((id: string) => {
		setActiveCategory(id)
	}, [])

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

	const is800 = width <= 800

	return (
		<section className={scss.MainMenu}>
			<div className='container'>
				<SectionTitles
					title={$t('homeSections.mainmenu.sectiontitles.title', 'global')}
					subtitle={$t(
						'homeSections.mainmenu.sectiontitles.subtitle',
						'global'
					)}
				/>
				<div className={scss.MainMenu__inner}>
					<CategoriesMenu
						isLink={is800}
						type={is800 ? 'mainmenu' : 'ourmenu'}
						categories={categories}
						activeCategory={activeCategory}
						changeActiveCategory={changeActiveCategory}
					/>
					<div className={scss.FoodItems}>
						{filteredSortedFoodItems.map((el, idx) => (
							<motion.div
								key={el.name}
								className={scss.foodItems__content}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 1 }}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.2 * (idx + 1) }}
							>
								<div className={scss.foodItems__content__top}>
									<h3>{el.name}</h3>
									{Array.from({
										length: width <= 750 ? 40 : width <= 650 ? 30 : 60
									}).map(() => '•')}
									<span>{el.price}</span>
								</div>
								<p>{el.description}</p>
								<div className={scss.foodItems__button}>
									<button>
										{$t('homeSections.mainmenu.toOrder', 'global')}
									</button>
								</div>
							</motion.div>
						))}
						<div data-link className='flexCenter'>
							<Link
								href={`/menu?category_id=${activeCategory}`}
								className={`${scss.view_full_menu} inlineFlexCenter`}
							>
								<span>
									{$t('homeSections.mainmenu.viewfullmenu', 'global')}
								</span>
								<span className='inlineFlexCenter'>
									<FaArrowRightLong />
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
})

export default MainMenu
