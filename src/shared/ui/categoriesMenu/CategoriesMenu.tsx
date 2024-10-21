'use client'
import React, { memo } from 'react'
import scss from './CategoriesMenu.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

interface ICategoriesMenuProps {
	activeCategory: string
	changeActiveCategory: (id: string) => void
	categories: {
		id: string
		title: string
	}[]
	type?: string
	isLink?: boolean
}

const CategoriesMenu: React.FC<ICategoriesMenuProps> = memo(
	({
		changeActiveCategory,
		activeCategory,
		categories,
		type,
		isLink = false
	}) => {
		return (
			<ul className={clsx(scss.CategoriesMenu, scss[`${type}`])}>
				{Array.isArray(categories) &&
					categories.map(el => (
						<li
							key={el.id}
							onClick={() => changeActiveCategory(el.id)}
							className={clsx('flexCenter', {
								[scss.active]: !isLink && activeCategory === el.id
							})}
						>
							{isLink ? (
								<Link href={`/menu?category_id=${el.id}`}>
									{el.title}
								</Link>
							) : (
								<span>{el.title}</span>
							)}
						</li>
					))}
			</ul>
		)
	}
)

export default CategoriesMenu
