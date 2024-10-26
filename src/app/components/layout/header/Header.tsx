'use client'
import { useLanguageStore } from '@/shared/stores/language-store'
import clsx from 'clsx'
import scss from './Header.module.scss'
import HeaderMenu from './ui/header-menu/HeaderMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo, useEffect, useRef } from 'react'
import SearchWithPopup from './ui/search-with-popup/SearchWithPopup'
import useWindowSize from '@/shared/hooks/useWindowSize'
import { useSize } from 'ahooks'

const Header = memo(() => {
	const { $t, language, switchLanguage } = useLanguageStore()
	const menuItems = $t<Record<'title' | 'href', string>[]>(
		'header.menu',
		'global'
	)
	const headerRef = useRef<HTMLHeadElement>(null)
	const pathname = usePathname()
	const languages = $t<string[]>('header.languages', 'global')
	const { width } = useWindowSize()
	const size = useSize(headerRef)
	useEffect(() => {
		if (headerRef.current && size) {
			if (size) {
				document.documentElement.style.setProperty(
					'--header-height',
					`${size?.height}px`
				)
			}
		}
	}, [headerRef, size])
	return (
		<header ref={headerRef} id={scss.Header}>
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
							{width <= 900 && (
								<HeaderMenu menuItems={menuItems} languages={languages} />
							)}{' '}
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
