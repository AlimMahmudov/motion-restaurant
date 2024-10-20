'use client'
import { useLanguageStore } from '@/shared/stores/language-store'
import Dropdown from '@/shared/ui/Dropdown'
import clsx from 'clsx'
import { CiSearch } from 'react-icons/ci'
import scss from './Header.module.scss'
import useWindowSize from '@/shared/hooks/useWindowSize'
import HeaderMenu from './ui/HeaderMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const { $t, language, setLanguage } = useLanguageStore()
	const menuItems = $t<Record<'title' | 'href', string>[]>(
		'header.menu',
		'global'
	)
	const pathname = usePathname()
	const languages = $t<string[]>('header.languages', 'global')
	const { width } = useWindowSize()
	return (
		<header id={scss.Header}>
			<div className='container'>
				<div className={scss.header}>
					<div className={scss.header_logo}>
						<h1>Restaurant</h1>
					</div>
					<div className={scss.header_search}>
						<nav className={scss.nav_items}>
							{Array.isArray(menuItems) &&
								menuItems?.map(item => {
									const href = pathname === '/' ? item.href : `/${item.href}`
									return (
										<Link href={href} key={item.title}>
											{item.title}
										</Link>
									)
								})}
						</nav>
						<div className={scss.end}>
							<div className={scss.header_input}>
								<label className='inlineFlexCenter' htmlFor='search'>
									{<CiSearch strokeWidth={2} />}
								</label>
								<input
									type='text'
									id='search'
									name='search'
									placeholder={`${$t('header.searchPlaceholder', 'global')}...`}
								/>
							</div>
							<HeaderMenu menuItems={menuItems} languages={languages} />
							<Dropdown
								pt={width <= 1400 ? 'default' : 'centered'}
								isOutsideClick
								className={clsx(scss.dropdown, {
									[scss.add]: width <= 1400
								})}
								trigger={({ toggle, ref }) => (
									<button
										className={clsx(scss.trigger_btn)}
										onClick={toggle}
										ref={ref}
									>
										{language}
									</button>
								)}
							>
								<ul className={scss.languages}>
									{Array.isArray(languages) &&
										languages?.map((item, idx) => {
											const lang = item.split(' - ')[0]?.toLowerCase()
											return (
												<li key={`${item}${idx}`}>
													<button
														onClick={() => {
															setLanguage(lang as TypeLanguage)
														}}
													>
														{item}
													</button>
												</li>
											)
										})}
								</ul>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
