import img10 from '@/shared/assets/Frame 10.png'
import img9 from '@/shared/assets/Frame 9.png'
import { FC } from 'react'
import scss from './SectionTitle.module.scss'

import Image from 'next/image'
interface Iprops {
	title: string
	subtitle: string
}
const SectionTitles: FC<Iprops> = ({ title, subtitle }) => {
	return (
		<div className={scss.SectionTitle}>
			<div className={scss.Title}>
				<Image src={img10} alt='not-found' />
				<h4>{title}</h4>
				<Image src={img9} alt='not-found' />
			</div>
			{subtitle && <h3 className={scss.SectionSubtitle}>{subtitle}</h3>}
		</div>
	)
}

export default SectionTitles
