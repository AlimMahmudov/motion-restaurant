'use client'
import React, { useMemo, useState } from 'react'
import scss from './SearchWithPopup.module.scss'
import { CiSearch } from 'react-icons/ci'
import { useLanguageStore } from '@/shared/stores/language-store'
import { Popup } from '@/shared/ui/Popup'
import { useToggle } from 'ahooks'
import { foodItems } from '@/shared/const/foodItems'
import CImage from '@/shared/ui/Image'
import clsx from 'clsx'
import useWindowSize from '@/shared/hooks/useWindowSize'

const SearchWithPopup: React.FC = () => {
	const { $t } = useLanguageStore()
	const [open, { set }] = useToggle()
	const { width } = useWindowSize()
	const [searchValue, setSearchValue] = useState('')
	const onClose = () => set(false)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && searchValue.trim() !== '') {
			set(true)
		}
	}

	const filteredFoodItems = useMemo(
		() =>
			foodItems.filter(item =>
				item.name
					.trim()
					.toLowerCase()
					.includes(searchValue.trim().toLowerCase())
			),
		[searchValue]
	)

	return (
		<>
			{width <= 600 && (
				<button
					onClick={() => set(true)}
					className={clsx('inlineFlexCenter', scss.open_search_popup)}
				>
					<CiSearch strokeWidth={1.1} />
				</button>
			)}
			<HeaderInput
				value={searchValue}
				onChange={setSearchValue}
				onKeyDown={handleKeyDown}
			/>
			<Popup blur_bg className={scss.popup} open={open} onClose={onClose}>
				<HeaderInput
					value={searchValue}
					onChange={setSearchValue}
					popupVersion
				/>
				<ul className={scss.search_list}>
					{filteredFoodItems.length > 0 ? (
						filteredFoodItems.map(item => (
							<SearchListItem key={item.id} item={item} />
						))
					) : (
						<li className={scss.no_results}>
							{$t('search.noResults', 'global')}
						</li>
					)}
				</ul>
			</Popup>
		</>
	)
}

const HeaderInput: React.FC<{
	value: string
	onChange: (value: string) => void
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
	popupVersion?: boolean
}> = ({ value, onChange, onKeyDown, popupVersion }) => {
	const { $t } = useLanguageStore()
	return (
		<div
			className={`${scss.header_input} ${
				popupVersion ? scss.popup_version : ''
			}`}
		>
			<label className='inlineFlexCenter' htmlFor='header-search'>
				<CiSearch strokeWidth={2} />
			</label>
			<input
				type='text'
				id='header-search'
				name='search'
				value={value}
				autoFocus
				onChange={e => onChange(e.target.value)}
				onKeyDown={onKeyDown}
				placeholder={`${$t('header.searchPlaceholder', 'global')}...`}
			/>
		</div>
	)
}

const SearchListItem: React.FC<{ item: (typeof foodItems)[0] }> = ({
	item
}) => (
	<div className={scss.food_item}>
		<CImage
			className='auto-to-notmobile rounded'
			width={50}
			height={50}
			url={item.imageSrc}
			alt={item.name}
		/>
		<div className={scss.food_details}>
			<div className={scss.column}>
				<h3>{item.name}</h3>
				<p data-ingredients='true' className={scss.ingredients}>
					{item.ingredients
						.slice(0, 4)
						.map(ingredient => ingredient)
						.join(', ')}
				</p>
			</div>
			<span>${item.price.toFixed(2)}</span>
		</div>
	</div>
)

export default SearchWithPopup
