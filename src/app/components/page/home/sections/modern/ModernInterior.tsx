'use client'
import interiorImg1 from '@/shared/assets/scril.png'
import interiorImg2 from '@/shared/assets/scrol2.png'
import interiorImg3 from '@/shared/assets/scrol3.png'
import interiorImg4 from '@/shared/assets/scrol4.png'
import interiorImg5 from '@/shared/assets/scrol5.png'
import { useLanguageStore } from '@/shared/stores/language-store'
import SectionTitles from '@/shared/ui/title/SectionTitle'
import Image from 'next/image'
import scss from './ModernInterior.module.scss'
import { memo } from 'react'
const ModernInterior = memo(() => {
	const { $t } = useLanguageStore()
	return (
		<>
			<section id='interior' className={scss.ModernInterior}>
				<SectionTitles
					title={$t(
						'homeSections.moderninterior.sectiontitles.title',
						'global'
					)}
					subtitle=''
				/>
				<div className={`container ${scss.container}`}>
					<div className={scss.ModernInterior__inner}>
						<div className={scss.modern__content}>
							<div className={scss.interior__left}>
								<Image src={interiorImg1} alt='not found' />
							</div>
							<div className={scss.interior__right}>
								<Image src={interiorImg2} alt='not found' />
								<div className={scss.interior__right__bottom}>
									<Image src={interiorImg3} alt='not found' />
									<Image src={interiorImg4} alt='not found' />
								</div>
							</div>
						</div>
						<div className={scss.modern__content}>
							<div className={scss.interior__left}>
								<Image src={interiorImg5} alt='not found' />
							</div>
							<div className={scss.interior__right}>
								<Image src={interiorImg2} alt='not found' />
								<div className={scss.interior__right__bottom}>
									<Image src={interiorImg3} alt='not found' />
									<Image src={interiorImg4} alt='not found' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
})
export default ModernInterior
