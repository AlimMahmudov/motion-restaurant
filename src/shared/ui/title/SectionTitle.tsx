import img10 from '@/shared/assets/Frame 10.png'
import img9 from '@/shared/assets/Frame 9.png'
import { FC, memo } from 'react'
import scss from './SectionTitle.module.scss'

import Image from 'next/image'
import { useLanguageStore } from '@/shared/stores/language-store'
import clsx from 'clsx'
interface Iprops {
	title: string
	subtitle: string
}
const SectionTitles: FC<Iprops> = memo(({ title, subtitle }) => {
	const { language } = useLanguageStore()
	return (
		<div className={clsx(scss.SectionTitle, scss[language])}>
			<div className={scss.Title}>
				<Image src={img10} alt='not-found' />
				<h4>{title}</h4>
				<Image src={img9} alt='not-found' />
			</div>
			{subtitle && <h3 className={scss.SectionSubtitle}>{subtitle}</h3>}
		</div>
	)
})

export default SectionTitles
