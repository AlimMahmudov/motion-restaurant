import React, { memo, useCallback, useRef } from 'react'
import scss from './HeaderMenu.module.scss'
import { useLanguageStore } from '@/shared/stores/language-store'
import Link from 'next/link'
import clsx from 'clsx'
import { useClickAway, useToggle } from 'ahooks'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'

interface IHeaderMenuProps {
	menuItems: Record<'title' | 'href', string>[]
	languages: string[]
}
const HeaderMenu: React.FC<IHeaderMenuProps> = memo(
	({ menuItems, languages }) => {
		const { setLanguage, language } = useLanguageStore()
		const [state, { toggle, set }] = useToggle(false)
		const ref = useRef<HTMLDivElement>(null)
		useClickAway(() => {
			set(false)
		}, ref)
		const onClose = useCallback(() => set(false), [set])
		const pathname = usePathname()
		useClickAway(onClose, ref)
		return (
			<div className={clsx('relative inlineFlexCenter', scss.header_menu)}>
				<button
					onClick={toggle}
					className={clsx(scss['open_menu'], 'inlineFlexCenter')}
				>
					{!state ? (
						<svg
							width='34'
							height='34'
							viewBox='0 0 34 34'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M17 6.375H29.75'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M17 13.4583H29.75'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4.25 20.5417H29.75'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4.25 27.625H29.75'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					) : (
						<IoClose />
					)}
				</button>
				{state &&
					typeof window !== 'undefined' &&
					createPortal(
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							transition={{ duration: 0.2, ease: 'backIn' }}
							className={clsx(scss.content, 'absolute', {})}
							ref={ref}
						>
							<nav className={scss.nav_items}>
								{Array.isArray(menuItems) &&
									menuItems?.map(item => {
										const href = pathname === '/' ? item.href : `/${item.href}`
										return (
											<Link onClick={onClose} href={href} key={item.title}>
												{item.title}
											</Link>
										)
									})}
							</nav>
							<ul className={scss.languages}>
								{Array.isArray(languages) &&
									languages?.map((item, idx) => {
										const lang = item.split(' - ')[0]?.toLowerCase()
										return (
											<li key={`${item}${idx}`}>
												<button
													onClick={() => {
														setLanguage(lang as TypeLanguage)
														onClose()
													}}
													className={clsx({
														[scss.active]: language == lang
													})}
												>
													{lang.toUpperCase()}
												</button>
											</li>
										)
									})}
							</ul>
						</motion.div>,
						document.body
					)}
			</div>
		)
	}
)
export default HeaderMenu
