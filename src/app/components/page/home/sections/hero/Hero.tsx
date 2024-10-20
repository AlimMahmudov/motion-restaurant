'use client'
import buttonImg2 from '@/shared/assets/Frame 10.png'
import buttonImg1 from '@/shared/assets/Frame 9.png'
import scss from './Hero.module.scss'

import { useLanguageStore } from '@/shared/stores/language-store'
import Image from 'next/image'
import { FaArrowRightLong, FaLocationDot, FaPhoneFlip } from 'react-icons/fa6'

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
							<span>{$t('homeSections.hero.reserveButton', 'global')} </span>
							<span className='inlineFlexCenter'>
								<FaArrowRightLong />
							</span>
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
