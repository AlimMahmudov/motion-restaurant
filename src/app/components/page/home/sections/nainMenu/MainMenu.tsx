'use client'
import { useLanguageStore } from '@/stores/language-store'
import CategoriesMenu from '../../components/categoriesMenu/CategoriesMenu'
import SectionTitles from '../../components/title/SectionTitle'
import scss from './MainMenu.module.scss'
const foodItems = [
	{
		title: 'Beer Brewery',
		price: 824,
		description:
			'Experience the rich and bold flavors of our in-house crafted beers at the Beer Brewery. Each sip is a journey through the unique brewing process, showcasing a delightful blend of malt and hops that creates a harmonious balance. Enjoy the aromatic notes of caramel and citrus, perfectly paired with our artisanal snacks for a complete brewery experience. Join us for a refreshing pint that’s as vibrant as the local culture!'
	},
	{
		title: 'Burger & Pasta',
		price: 814,
		description:
			'Indulge in the ultimate comfort food with our Burger & Pasta combo. Sink your teeth into a juicy, handcrafted burger made from premium beef, topped with fresh lettuce, ripe tomatoes, and a special house sauce that adds a zesty kick. On the side, savor our creamy, al dente pasta, tossed in a rich, savory sauce that will tantalize your taste buds. This duo promises a satisfying feast for every craving!'
	},
	{
		title: 'Craft Beer Selection',
		price: 824,
		description:
			'Delight in our exclusive Craft Beer Selection, featuring a curated range of locally brewed beers. Each beer is a testament to the art of brewing, with unique flavors ranging from hoppy IPAs to smooth stouts. Perfect for connoisseurs and casual drinkers alike, our selection changes regularly, offering something new with every visit. Pair your choice with our gourmet snacks for a true taste of local craftsmanship!'
	},
	{
		title: 'Gourmet Burger & Pasta',
		price: 814,
		description:
			"Elevate your dining experience with our Gourmet Burger & Pasta. This dish combines the best of both worlds, featuring a gourmet burger made with a blend of prime cuts, topped with aged cheese, caramelized onions, and a tangy aioli. Accompanying this masterpiece is our freshly made pasta, drizzled with a homemade basil pesto that bursts with flavor. It's a culinary journey you won't want to miss!"
	},
	{
		title: 'Artisan Beer Pairing',
		price: 824,
		description:
			'Discover the perfect pairing with our Artisan Beer selection, designed to complement our menu offerings beautifully. Each beer is thoughtfully paired with a dish, enhancing the flavors and textures of both. Enjoy a crisp lager with your grilled meats, or a rich stout with our decadent desserts. This experience is perfect for those looking to explore new tastes and elevate their dining adventure!'
	}
]

const MainMenu = () => {
	const { $t } = useLanguageStore()
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
					<CategoriesMenu />
					<div className={scss.FoodItems}>
						{foodItems.map(el => (
							<div key={el.title} className={scss.foodItems__content}>
								<div className={scss.foodItems__content__top}>
									<h3>{el.title}</h3>
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
