'use client'
import { useLanguageStore } from '@/stores/language-store'
import SectionTitles from '../../../../../../ui/title/SectionTitle'
import scss from './MainMenu.module.scss'
import CategoriesMenu from '@/ui/categoriesMenu/CategoriesMenu'
import React, { useMemo } from 'react'
import { foodItems } from '@/const/foodItems'
import { useAutoAnimate } from '@formkit/auto-animate/react'

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
						<button className={`${scss.view_full_menu} inlineFlexCenter`}>
							<span>{$t('homeSections.mainmenu.viewfullmenu', 'global')}</span>
							<svg
								width='14'
								height='12'
								viewBox='0 0 14 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8.41748 2.96509L11.9583 6.00009L8.41748 9.03509'
									stroke='white'
									stroke-width='1.5'
									stroke-miterlimit='10'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M2.0415 6H11.859'
									stroke='white'
									stroke-width='1.5'
									stroke-miterlimit='10'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainMenu
