'use client'
import buttonImg2 from '@/shared/assets/Frame 10.png'
import buttonImg1 from '@/shared/assets/Frame 9.png'
import scss from './Hero.module.scss'

import { useLanguageStore } from '@/shared/stores/language-store'
import Image from 'next/image'
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6'
import { memo } from 'react'
import ReserveButton from '../modern/ui/reserve-button/ReserveButton'

const Hero = memo(() => {
	const { $t } = useLanguageStore()

	return (
		<section id={scss.Hero}>
			<div className='container'>
				<div className={scss.hero}>
					<div className={scss.head}>
						<Image className={scss.headImg} src={buttonImg2} alt='' />
						<h3>{$t('homeSections.hero.subtitle', 'global')}</h3>{' '}
						<Image className={scss.headImg} src={buttonImg1} alt='' />
					</div>
					<h1>{$t('homeSections.hero.title', 'global')}</h1>
					<p>{$t('homeSections.hero.description', 'global')}</p>

					<ReserveButton />
				</div>

				<div className={scss.block}>
					<div className={scss.location1}>
						<h3>{$t('homeSections.hero.location.header', 'global')}</h3>
						<div className={scss.line}></div>

						<p className='inlineFlexCenter'>
							<span>
								<FaLocationDot />
							</span>
							{$t('homeSections.hero.location.address', 'global')}
						</p>
					</div>

					<div className={scss.location2}>
						<h3>{$t('homeSections.hero.hotline.header', 'global')}</h3>
						<div className={scss.line}></div>

						<p className='inlineFlexCenter'>
							<span>
								<FaPhoneFlip />
							</span>
							{$t('homeSections.hero.hotline.number', 'global')}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
})

export default Hero
