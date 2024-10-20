'use client'
import React from 'react'
import scss from './About.module.scss'
import img10 from '@/assets/Frame 10.png'
import img15 from '@/assets/Frame 15.png'
import img16 from '@/assets/Frame 16.png'
import Image from 'next/image'
import { useLanguageStore } from '@/stores/language-store'

const About = () => {
	const { $t } = useLanguageStore()

	return (
		<div id='about_us' data-scrool="true">
			<div className='container'>
				<div className={scss.about}>
					<div className={scss.about_text}>
						<Image src={img10} alt='' />
						<h1>{$t('homeSections.about.title', 'global')}</h1>{' '}
					</div>
					<div className={scss.about_block}>
						<div className={scss.about_box}>
							<h1>{$t('homeSections.about.journey', 'global')}</h1>{' '}
							<Image src={img15} alt='img' />
						</div>
						<div className={scss.about_box}>
							<p>{$t('homeSections.about.description', 'global')} </p>
							<Image src={img16} alt='img' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
