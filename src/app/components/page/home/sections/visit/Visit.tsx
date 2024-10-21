'use client'
import img10 from '@/shared/assets/Frame 10.png'
import { useLanguageStore } from '@/shared/stores/language-store'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import scss from './Visit.module.scss'

const Visit = () => {
	const { $t, language } = useLanguageStore()
	return (
		<section id='contacts'>
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
						<a href='' className={`${scss.t} inlineFlexCenter`}>
							<svg
								width='28'
								height='30'
								viewBox='0 0 28 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M21.6332 0.718401C21.2205 1.14404 21.2205 1.84429 21.6332 2.28366L26.1728 6.96572C26.5855 7.40509 27.2778 7.40509 27.6905 6.96572C28.1032 6.54008 28.1032 5.83983 27.6905 5.41419L23.1508 0.718401C22.7381 0.29276 22.0326 0.29276 21.6332 0.718401ZM6.76287 22.3026C10.6102 26.2706 15.283 29.3325 19.1038 29.3325C20.8211 29.3325 22.3254 28.7146 23.5369 27.3416C24.2425 26.5315 24.6818 25.5841 24.6818 24.6504C24.6818 23.9639 24.4289 23.3049 23.8032 22.838L19.7162 19.8448C19.0905 19.4054 18.5713 19.1858 18.092 19.1858C17.4929 19.1858 16.9471 19.5427 16.3347 20.1606L15.3895 21.1217C15.2431 21.2728 15.0567 21.3414 14.8836 21.3414C14.6839 21.3414 14.4843 21.259 14.3511 21.1904C13.5257 20.7373 12.1146 19.4878 10.7966 18.1422C9.49198 16.7967 8.28052 15.3413 7.85451 14.49C7.78795 14.3389 7.70807 14.1467 7.70807 13.9408C7.70807 13.7623 7.76132 13.5838 7.90776 13.4327L8.85297 12.4304C9.43873 11.7988 9.79817 11.2496 9.79817 10.618C9.79817 10.1237 9.57185 9.58822 9.13253 8.9429L6.2703 4.78259C5.80435 4.12353 5.15203 3.8352 4.43314 3.8352C3.5545 3.8352 2.64923 4.24711 1.86378 5.02974C0.572447 6.30666 0 7.88566 0 9.62941C0 13.57 2.91549 18.3482 6.76287 22.3026ZM20.3152 8.33876C21.0341 9.03901 22.179 9.05274 22.8846 8.3113C23.5902 7.58359 23.5902 6.40278 22.8846 5.67507C22.179 4.93363 21.0208 4.93363 20.3152 5.66134C19.5963 6.40278 19.5963 7.56986 20.3152 8.33876ZM15.5226 7.00691C15.1099 7.43255 15.1099 8.14653 15.5226 8.57218L20.0623 13.268C20.475 13.6936 21.1672 13.6936 21.5799 13.268C21.9926 12.8423 21.9926 12.1283 21.5799 11.7027L17.027 7.00691C16.6143 6.58127 15.9353 6.58127 15.5226 7.00691ZM14.2047 14.6135C14.9236 15.355 16.0685 15.355 16.7874 14.6135C17.5062 13.8721 17.5062 12.6913 16.7874 11.9773C16.0685 11.2221 14.9236 11.2221 14.2047 11.9498C13.4991 12.6913 13.4991 13.8721 14.2047 14.6135Z'
									fill='#1F2731'
								/>
							</svg>
							<span>+771219900</span>
						</a>
						<a href='' className={`${scss.t} inlineFlexCenter`}>
							<svg
								width='34'
								height='27'
								viewBox='0 0 34 27'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M4.83514 26.5H29.6268C32.3986 26.5 34 24.9306 34 21.8221V5.1628C34 2.06936 32.3832 0.5 29.1649 0.5H4.37319C1.60145 0.5 0 2.05427 0 5.1628V21.8221C0 24.9457 1.61685 26.5 4.83514 26.5ZM15.1676 14.262L3.54167 3.02002C3.88043 2.88421 4.2808 2.80876 4.74275 2.80876H29.2572C29.7346 2.80876 30.1504 2.88421 30.4891 3.03511L18.894 14.262C18.2319 14.9109 17.6313 15.1976 17.0308 15.1976C16.4149 15.1976 15.8143 14.8958 15.1676 14.262ZM2.35598 21.8221V5.1628C2.35598 5.04208 2.35598 5.10244 2.35598 4.99681L11.2101 13.5226L2.37138 22.0786C2.35598 22.0032 2.35598 21.9127 2.35598 21.8221ZM31.644 5.17789V21.8372C31.644 21.8976 31.644 21.973 31.644 22.0334L22.8514 13.5226L31.644 5.04208C31.644 5.17789 31.644 5.17789 31.644 5.17789ZM4.74275 24.1912C4.31159 24.1912 3.94203 24.1309 3.61866 23.9951L12.827 15.0769L13.8279 16.0427C14.9058 17.0839 15.9375 17.5215 17.0308 17.5215C18.1087 17.5215 19.1558 17.0839 20.2337 16.0427L21.2346 15.0769L30.4275 23.98C30.0888 24.1309 29.7038 24.1912 29.2572 24.1912H4.74275Z'
									fill='#1E252E'
								/>
							</svg>
							<span>motionweb312@gmail.com</span>
						</a>
						<div className={scss.links}>
							<a href='#' className='inlineFlexCenter'>
								<svg
									width='31'
									height='27'
									viewBox='0 0 31 27'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M25.7245 24.6851L25.7255 24.6825L25.7516 24.6173L30.2498 1.93864V1.86498C30.2498 1.29993 30.041 0.806639 29.5867 0.51075C29.189 0.251757 28.7319 0.233313 28.4113 0.257643C28.0723 0.283376 27.7526 0.367999 27.5313 0.438439C27.4175 0.474679 27.3222 0.509597 27.254 0.536007C27.2198 0.549261 27.1921 0.560509 27.1719 0.568889L27.1521 0.577225L2.0724 10.4156L2.0655 10.4181C2.05196 10.423 2.03404 10.4297 2.01241 10.4381C1.96928 10.4549 1.91057 10.479 1.8416 10.5102C1.70618 10.5716 1.51907 10.6663 1.32932 10.7962C1.00704 11.0169 0.393368 11.5394 0.496991 12.3678C0.582822 13.0539 1.05578 13.4896 1.37463 13.7152C1.54555 13.8362 1.70907 13.9234 1.82881 13.9804C1.88949 14.0093 1.94102 14.0314 1.9794 14.047C1.99865 14.0549 2.01474 14.0611 2.02719 14.0658L2.04312 14.0718L2.05331 14.0756L6.44117 15.5528C6.42636 15.8281 6.45367 16.1088 6.52668 16.3857L8.7246 24.7234C8.98521 25.7119 9.87955 26.4006 10.9019 26.3998C11.8183 26.3992 12.631 25.8448 12.9763 25.0176L16.4078 21.3485L22.3013 25.8669L22.3851 25.9034C22.9206 26.1371 23.4208 26.2111 23.8782 26.1486C24.3349 26.0862 24.6979 25.8947 24.9705 25.6766C25.2388 25.4619 25.4227 25.2197 25.5383 25.0373C25.5971 24.9447 25.6409 24.8632 25.6713 24.8019C25.6865 24.7711 25.6985 24.7451 25.7076 24.7248L25.7189 24.6987L25.7229 24.689L25.7245 24.6851ZM8.70228 15.8122C8.65232 15.6227 8.73074 15.4227 8.89617 15.3176L23.7792 5.86623C23.7792 5.86623 24.6546 5.33479 24.6233 5.86623C24.6233 5.86623 24.7795 5.96008 24.3104 6.39768C23.8655 6.81329 13.7029 16.6249 12.6746 17.6177C12.6153 17.675 12.5798 17.7408 12.5589 17.8206L10.9002 24.1498L8.70228 15.8122Z'
										fill='#1F2731'
									/>
								</svg>
							</a>
							<a href='#' className='inlineFlexCenter'>
								<svg
									width='28'
									height='28'
									viewBox='0 0 28 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14 9.12507C11.3076 9.12507 9.12503 11.3077 9.12503 14.0001C9.12503 16.6925 11.3076 18.8751 14 18.8751C16.6924 18.8751 18.875 16.6925 18.875 14.0001C18.875 11.3077 16.6924 9.12507 14 9.12507Z'
										fill='#1F2731'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M6.15434 0.622271C11.3265 0.0442039 16.6736 0.0442039 21.8458 0.622271C24.6934 0.940532 26.9901 3.1842 27.3244 6.04178C27.9428 11.3293 27.9428 16.6709 27.3244 21.9584C26.9901 24.8159 24.6934 27.0596 21.8458 27.3779C16.6736 27.9559 11.3265 27.9559 6.15434 27.3779C3.30674 27.0596 1.00995 24.8159 0.67573 21.9584C0.0573086 16.6709 0.0573086 11.3293 0.67573 6.04178C1.00995 3.1842 3.30674 0.940532 6.15434 0.622271ZM21.5 5.00007C20.6716 5.00007 20 5.67164 20 6.50007C20 7.3285 20.6716 8.00007 21.5 8.00007C22.3285 8.00007 23 7.3285 23 6.50007C23 5.67164 22.3285 5.00007 21.5 5.00007ZM6.87503 14.0001C6.87503 10.065 10.065 6.87507 14 6.87507C17.9351 6.87507 21.125 10.065 21.125 14.0001C21.125 17.9351 17.9351 21.1251 14 21.1251C10.065 21.1251 6.87503 17.9351 6.87503 14.0001Z'
										fill='#1F2731'
									/>
								</svg>
							</a>
						</div>
						<iframe
							className={scss.map}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6700190426354!2d74.58025919064268!3d42.87980852772764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ba3daadfbb%3A0x4e7a5fa037f5fd93!2sMotion%20Web%20IT%20academy!5e0!3m2!1sen!2skg!4v1729421855814!5m2!1sen!2skg'
							width='600'
							height='450'
							loading='lazy'
						></iframe>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Visit
