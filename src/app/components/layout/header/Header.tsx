'use client'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import scss from './Header.module.scss'
import { useLanguageStore } from '@/stores/language-store'
import Dropdown from '@/ui/Dropdown'
import clsx from 'clsx'

const Header = () => {
	const { $t, language, setLanguage } = useLanguageStore()
	const menuItems = $t<Record<'title' | 'href', string>[]>(
		'header.menu',
		'global'
	)
	const languages = $t<string[]>('header.languages', 'global')
	return (
		<header id={scss.Header}>
			<div className='container'>
				<div className={scss.header}>
					<div className={scss.header_logo}>
						<h1>Restaurant</h1>
					</div>
					<div className={scss.header_search}>
						<nav>
							{Array.isArray(menuItems) &&
								menuItems?.map(item => (
									<a href={item.href} key={item.title}>
										{item.title}
									</a>
								))}
						</nav>
						<div className={scss.end}>
							<div className={scss.header_input}>
								<label className="inlineFlexCenter" htmlFor='search'>{<CiSearch strokeWidth={2} />}</label>
								<input
									type='text'
									id='search'
									name='search'
									placeholder={`${$t('header.searchPlaceholder', 'global')}...`}
								/>
							</div>
							<Dropdown
								pt='centered'
								isOutsideClick
								className={scss.dropdown}
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
