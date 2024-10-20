'use client'
import img10 from '@/shared/assets/Frame 10.png'
import img19 from '@/shared/assets/Frame 19.png'
import img20 from '@/shared/assets/Frame 20.png'
import img38 from '@/shared/assets/Frame 38.png'
import scss from './Best.module.scss'

import { useLanguageStore } from '@/shared/stores/language-store'
import Image from 'next/image'

const Best = () => {
	const { $t } = useLanguageStore()

	return (
		<div>
			<div className='container'>
				<div className={scss.best}>
					<div className={scss.best_sellers}>
						<Image src={img10} alt='img' />
						<h4>{$t('homeSections.best.title', 'global')}</h4>{' '}
					</div>
					<div className={scss.best_block}>
						<div className={scss.best_text}>
							<h4>{$t('homeSections.best.exception', 'global')}</h4>{' '}
							<p>{$t('homeSections.best.description', 'global')} </p>
						</div>
						<div className={scss.best_image}>
							<Image src={img19} alt='img' />
							<Image src={img20} alt='img' />
							<Image src={img38} alt='img' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Best
