'use client'
import React, { useMemo } from 'react'
import scss from './OurMenu.module.scss'
import CategoriesMenu from '@/ui/categoriesMenu/CategoriesMenu'
import { useLanguageStore } from '@/stores/language-store'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { foodItems } from '@/const/foodItems'

const OurMenu = () => {
	const { $t } = useLanguageStore()

	const categories = $t<{ id: string; title: string }[]>(
		'homeSections.mainmenu.categories',
		'global'
	)
	const [activeCategory, setActiveCategory] = React.useState<string>(
		categories[0].id
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

	const [parent] = useAutoAnimate()

	return (
		<section className={scss.MainMenu}>
			<div className='container'>
				<div className={scss.MainMenu__inner}>
					<CategoriesMenu
						categories={categories}
						activeCategory={activeCategory}
						changeActiveCategory={changeActiveCategory}
					/>
					{filteredSortedFoodItems.length == 0 ? (
						<div className={scss.noItems}>
							<p>
								No items found matching your search criteria. Please try again
								with different keywords.
							</p>
						</div>
					) : (
						<div className={scss.FoodItems} ref={parent}>
							{filteredSortedFoodItems.map(
								({ name, price, imageSrc, ingredients }) => (
									<div key={name} className={scss.foodItems__card}>
										<figure className={scss.image_figure}>
											<img src={imageSrc} alt={name} />
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
									</div>
								)
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default OurMenu
