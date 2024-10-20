'use client'
import React from 'react'
import scss from './Hero.module.scss'
import buttonImg1 from '../../../../assets/Frame 9.png'
import buttonImg2 from '../../../../assets/Frame 10.png'

import { FaArrowRightLong } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneFlip } from 'react-icons/fa6'
import Image from 'next/image'
import { useLanguageStore } from '@/stores/language-store'

const Hero = () => {
	const { $t } = useLanguageStore()

	return (
		<div id={scss.Hero}>
			<div className='container'>
				<div className={scss.hero}>
					<div className={scss.head}>
						<Image className={scss.headImg} src={buttonImg2} alt='' />
						<h3>{$t('homeSections.hero.subtitle', 'global')}</h3>{' '}
						<Image className={scss.headImg} src={buttonImg1} alt='' />
					</div>
					<h1>{$t('homeSections.hero.title', 'global')}</h1>
					<p>{$t('homeSections.hero.description', 'global')}</p>

					<div className={scss.box}>
						<div className={scss.line}></div>
						<button>
							{$t('homeSections.hero.reserveButton', 'global')} <FaArrowRightLong />
						</button>
						<div className={scss.line}></div>
					</div>
				</div>

				<div className={scss.block}>
					<div className={scss.location1}>
						<h3>{$t('homeSections.hero.location.header', 'global')}</h3>
						<div className={scss.line}></div>

						<p>
							<span>
								<FaLocationDot />
							</span>
							{$t('homeSections.hero.location.address', 'global')}
						</p>
					</div>

					<div className={scss.location2}>
						<h3>{$t('homeSections.hero.hotline.header', 'global')}</h3>
						<div className={scss.line}></div>

						<p>
							<span>
								<FaPhoneFlip />
							</span>
							{$t('homeSections.hero.hotline.number', 'global')}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero