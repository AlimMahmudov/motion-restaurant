'use client'
import React from "react";
import scss from "./ModernInterior.module.scss";
import Image from "next/image";
import interiorImg1 from "../../../../assets/scril.png";
import interiorImg2 from "../../../../assets/scrol2.png";
import interiorImg3 from "../../../../assets/scrol3.png";
import interiorImg4 from "../../../../assets/scrol4.png";
import interiorImg5 from "../../../../assets/scrol5.png";
import SectionTitles from "../title/SectionTitle";
import { useLanguageStore } from '@/stores/language-store'
const ModernInterior = () => {
	const {$t} = useLanguageStore()
  return (
		<>
			<SectionTitles
				title={$t('homeSections.moderninterior.sectiontitles.title', 'global')}
				subtitle=''
			/>
			<section id='interior' className={scss.ModernInterior}>
				<div className='container'>
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
};

export default ModernInterior;
