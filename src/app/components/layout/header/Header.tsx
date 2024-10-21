'use client'
import { useLanguageStore } from '@/shared/stores/language-store'
import clsx from 'clsx'
import scss from './Header.module.scss'
import HeaderMenu from './ui/header-menu/HeaderMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'
import SearchWithPopup from './ui/search-with-popup/SearchWithPopup'

const Header = memo(() => {
	const { $t, language, switchLanguage } = useLanguageStore()
	const menuItems = $t<Record<'title' | 'href', string>[]>(
		'header.menu',
		'global'
	)
	const pathname = usePathname()
	const languages = $t<string[]>('header.languages', 'global')
	return (
		<header id={scss.Header}>
			<div className='container'>
				<div className={scss.header}>
					<Link href='/' className={scss.header_logo}>
						<h1>Restaurant</h1>
					</Link>
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
							<SearchWithPopup />
							<HeaderMenu menuItems={menuItems} languages={languages} />
							<button
								onClick={switchLanguage}
								className={clsx(scss.switchLanguage)}
							>
								{language.toUpperCase()}
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
})

export default Header
