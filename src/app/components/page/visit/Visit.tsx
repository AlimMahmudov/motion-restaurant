'use client'
import React from 'react'
import scss from './Visit.module.scss'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import img10 from '../../../../assets/Frame 10.png'
import map from '../../../../assets/Frame_map.png'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { useLanguageStore } from '@/stores/language-store'

const Visit = () => {
	const { $t,language } = useLanguageStore()
	return (
		<div id='contacts'>
			<div className='container'>
				<div className={`${scss.visit} ${scss[language]}`}>
					<div className={scss.visit_text}>
						<div className={scss.visit_restarant}>
							<Image src={img10} alt='img' />
							<h1>{$t('homeSections.visit.visit_restaurant', 'global')}</h1>
						</div>
						<h1 data-h1>{$t('homeSections.visit.join_us', 'global')}</h1>
						<div className={scss.visit_your}>
							<h2>{$t('homeSections.visit.your_neighborhood', 'global')}</h2>
							<h3>{$t('homeSections.visit.address', 'global')}</h3>
						</div>
						<div className={scss.visit_your}>
							<h2>{$t('homeSections.visit.opening_hours', 'global')}</h2>
							<h3>{$t('homeSections.visit.mon_thu', 'global')}</h3>
							<h3>{$t('homeSections.visit.fri_sun', 'global')}</h3>
						</div>
						<button className={`${scss.visit_button} inlineFlexCenter`}>
							<span>
								{$t('homeSections.visit.purchase_gift_card', 'global')}
							</span>
							<FaArrowRight />
						</button>
					</div>
					<div className={scss.visit_image}>
						<h1>{$t('homeSections.visit.contact_info', 'global')}</h1>
						<h1>
							<BsFillTelephoneOutboundFill /> +771219900
						</h1>
						<h1>
							<MdOutlineEmail /> motionweb312@gmail.com
						</h1>
						<div className={scss.telegram}>
							<h1>
								<FaTelegramPlane />
							</h1>
							<h1>
								<AiFillInstagram />
							</h1>
						</div>
						<Image src={map} alt='img' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Visit
