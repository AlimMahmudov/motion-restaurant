'use client'
import { foodItems } from '@/shared/const/foodItems'
import { useLanguageStore } from '@/shared/stores/language-store'
import CategoriesMenu from '@/shared/ui/categoriesMenu/CategoriesMenu'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import scss from './MainMenu.module.scss'
import SectionTitles from '@/shared/ui/title/SectionTitle'

const MainMenu = () => {
	const { $t } = useLanguageStore()
	const categories = $t<{ id: string; title: string }[]>(
		'homeSections.mainmenu.categories',
		'global'
	)
	const [activeCategory, setActiveCategory] = React.useState<string>(
		categories[0].id
	)
	function changeActiveCategory(id: string) {
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

	const [parent] = useAutoAnimate()

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
						categories={categories}
						activeCategory={activeCategory}
						changeActiveCategory={changeActiveCategory}
					/>
					<div className={scss.FoodItems} ref={parent}>
						{filteredSortedFoodItems.map(el => (
							<div key={el.name} className={scss.foodItems__content}>
								<div className={scss.foodItems__content__top}>
									<h3>{el.name}</h3>
									<i>
										....................................................................
									</i>
									<span>{el.price}</span>
								</div>
								<p>{el.description}</p>
								<div className={scss.foodItems__button}>
									<button>
										{$t('homeSections.mainmenu.toOrder', 'global')}
									</button>
								</div>
							</div>
						))}
						<Link
							href={`/menu?category_id=${activeCategory}`}
							className={`${scss.view_full_menu} inlineFlexCenter`}
						>
							<span>{$t('homeSections.mainmenu.viewfullmenu', 'global')}</span>
							<span className='inlineFlexCenter'>
								<FaArrowRightLong />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainMenu
