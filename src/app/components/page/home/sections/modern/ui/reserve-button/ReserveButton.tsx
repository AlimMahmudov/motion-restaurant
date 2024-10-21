'use client'
import React from 'react'
import scss from './ReserveButton.module.scss'
import { useLanguageStore } from '@/shared/stores/language-store'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useToggle } from 'ahooks'
import { Popup } from '@/shared/ui/Popup'
const ReserveButton: React.FC = () => {
	const [open, { toggle, set }] = useToggle()
	const onClose = () => set(false)
	const { $t } = useLanguageStore()
	return (
		<>
			<button onClick={toggle} className={scss.reserve_btn}>
				<span>{$t('homeSections.hero.reserveButton', 'global')} </span>
				<span className='inlineFlexCenter'>
					<FaArrowRightLong />
				</span>
			</button>
			<Popup blur_bg className={scss.popup} open={open} onClose={onClose}>
				<form onSubmit={e => e.preventDefault()} className={scss.form}>
					<div className={scss.field_box}>
						<figure>
							<svg
								width='52'
								height='52'
								viewBox='0 0 52 52'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx='26' cy='26' r='26' fill='#FDE7E9' />
								<path
									opacity='0.9'
									d='M25.0766 25.9261C28.287 25.9261 30.8895 23.3236 30.8895 20.1132C30.8895 16.9028 28.287 14.3002 25.0766 14.3002C21.8662 14.3002 19.2637 16.9028 19.2637 20.1132C19.2637 23.3236 21.8662 25.9261 25.0766 25.9261Z'
									fill='#1F2731'
								/>
								<path
									opacity='0.6'
									d='M25.0767 28.8327C19.2522 28.8327 14.5088 32.7389 14.5088 37.5521C14.5088 37.8776 14.7646 38.1333 15.0901 38.1333H35.0634C35.3889 38.1333 35.6447 37.8776 35.6447 37.5521C35.6447 32.7389 30.9013 28.8327 25.0767 28.8327Z'
									fill='#1F2731'
								/>
								<path
									opacity='0.9'
									d='M36.04 29.1116C34.9936 28.0653 34.1682 28.4025 33.4591 29.1116L29.3435 33.2272C29.1807 33.39 29.0296 33.6922 28.9947 33.9131L28.7738 35.4826C28.6924 36.0522 29.0877 36.4475 29.6574 36.3662L31.2268 36.1453C31.4477 36.1104 31.7617 35.9593 31.9128 35.7965L36.0283 31.681C36.7491 30.9834 37.0863 30.158 36.04 29.1116Z'
									fill='#1F2731'
								/>
							</svg>
						</figure>
						<div className={`${scss.column} flexCol`}>
							<label htmlFor='field_name'>
								{$t('ryt-form.name.label', 'global')}
							</label>
							<input
								required
								type='text'
								name='field_name'
								id='field_name'
								placeholder={$t('ryt-form.name.input-placeholder', 'global')}
							/>
						</div>
					</div>
					<div className={scss.field_box}>
						<figure>
							<svg
								width='52'
								height='52'
								viewBox='0 0 52 52'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle opacity='0.8' cx='26' cy='26' r='26' fill='#F8E9FC' />
								<path
									d='M26.6782 28.4789L24.5907 30.5663C24.1506 31.0064 23.4511 31.0064 22.9997 30.5776C22.8756 30.4535 22.7515 30.3406 22.6274 30.2165C21.4652 29.043 20.4158 27.8131 19.4793 26.5268C18.554 25.2405 17.8093 23.9542 17.2677 22.6791C16.7374 21.3928 16.4666 20.1629 16.4666 18.9894C16.4666 18.2221 16.602 17.4887 16.8728 16.8117C17.1436 16.1234 17.5723 15.4915 18.1704 14.9273C18.8925 14.2165 19.6824 13.8667 20.5173 13.8667C20.8333 13.8667 21.1492 13.9344 21.4313 14.0698C21.7247 14.2052 21.9842 14.4083 22.1873 14.7017L24.8051 18.3914C25.0082 18.6735 25.1549 18.933 25.2564 19.1812C25.358 19.4182 25.4144 19.6551 25.4144 19.8695C25.4144 20.1403 25.3354 20.4111 25.1774 20.6706C25.0308 20.9302 24.8164 21.201 24.5456 21.4718L23.688 22.3632C23.5639 22.4873 23.5075 22.634 23.5075 22.8145C23.5075 22.9048 23.5188 22.9838 23.5413 23.074C23.5752 23.1643 23.609 23.232 23.6316 23.2997C23.8347 23.6721 24.1845 24.1573 24.681 24.744C25.1887 25.3307 25.7303 25.9288 26.3171 26.5268C26.4299 26.6396 26.554 26.7525 26.6669 26.8653C27.1182 27.3054 27.1295 28.0275 26.6782 28.4789Z'
									fill='#EF272C'
								/>
								<path
									opacity='0.5'
									d='M39 32.2927C39 32.6087 38.9436 32.9359 38.8307 33.2518C38.7969 33.3421 38.763 33.4324 38.7179 33.5226C38.5261 33.9289 38.2778 34.3125 37.9506 34.6736C37.3977 35.2829 36.7884 35.7229 36.1001 36.005C36.0888 36.005 36.0775 36.0163 36.0663 36.0163C35.4005 36.2871 34.6784 36.4338 33.8998 36.4338C32.7489 36.4338 31.519 36.163 30.2214 35.6101C28.9238 35.0572 27.6262 34.3125 26.3398 33.376C25.8998 33.0487 25.4597 32.7215 25.0422 32.3717L28.732 28.682C29.0479 28.919 29.33 29.0995 29.5669 29.2236C29.6234 29.2462 29.6911 29.28 29.77 29.3139C29.8603 29.3477 29.9506 29.359 30.0521 29.359C30.2439 29.359 30.3906 29.2913 30.5148 29.1672L31.3723 28.3209C31.6544 28.0388 31.9252 27.8245 32.1847 27.6891C32.4442 27.5311 32.7038 27.4521 32.9858 27.4521C33.2002 27.4521 33.4259 27.4972 33.6741 27.5988C33.9224 27.7003 34.1819 27.847 34.464 28.0388L38.1988 30.6905C38.4922 30.8936 38.6953 31.1305 38.8194 31.4126C38.9323 31.6947 39 31.9768 39 32.2927Z'
									fill='#EF272C'
								/>
							</svg>
						</figure>
						<div className={`${scss.column} flexCol`}>
							<label htmlFor='field_phone'>
								{$t('ryt-form.phone.label', 'global')}
							</label>
							<input
								required
								type='tel'
								name='field_phone'
								id='field_phone'
								placeholder={$t('ryt-form.phone.input-placeholder', 'global')}
							/>
						</div>
					</div>
					<button type='submit'>{$t('ryt-form.submit', 'global')}</button>
				</form>
			</Popup>
		</>
	)
}

export default ReserveButton
