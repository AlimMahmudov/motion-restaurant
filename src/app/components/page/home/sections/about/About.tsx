'use client'
import img10 from '@/shared/assets/Frame 10.png'
import img15 from '@/shared/assets/Frame 15.png'
import img16 from '@/shared/assets/Frame 16.png'
import { useLanguageStore } from '@/shared/stores/language-store'
import Image from 'next/image'
import scss from './About.module.scss'
import { memo } from 'react'
import useWindowSize from '@/shared/hooks/useWindowSize'

const About = memo(() => {
	const { $t, language } = useLanguageStore()
	const { width, height } = useWindowSize()
	return (
		<section id='about_us' className={scss[language]}>
			{width}
			{height}
			<div className='container'>
				<div className={scss.about}>
					<div className={scss.about_text}>
						<Image src={img10} alt='' />
						<h4>{$t('homeSections.about.title', 'global')}</h4>{' '}
					</div>
					<div className={scss.about_block}>
						<div className={scss.about_box}>
							<h4>{$t('homeSections.about.journey', 'global')}</h4>{' '}
							<p>{$t('homeSections.about.description', 'global')} </p>
						</div>
						<div className={scss.about_box}>
							<Image src={img15} alt='img' />
							<Image src={img16} alt='img' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
})

export default About
