'use client'
import { useClickAway, useKeyPress } from 'ahooks'
import clsx from 'clsx'
import React, { memo, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'

interface IPopupProps extends IChildren {
	className?: string
	open: boolean
	onClose(): void
	keyover?: boolean
	blurbg?: boolean
}

const Popup: React.FC<IPopupProps> = memo(props => {
	const { className, children, onClose, open, keyover, blurbg = false } = props

	//  @ts-ignore
	useKeyPress((event: KeyboardEvent) => {
		if (event.key === 'Escape' && keyover) {
			onClose()
		}
	})
	const ref = useRef<HTMLDivElement>(null)
	useClickAway(onClose, ref, 'click')
	useEffect(() => {
		const handleScroll = () => {
			if (!blurbg && open) {
				onClose()
			}
		}

		if (!blurbg && open) {
			window.addEventListener('scroll', handleScroll)
		}

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [open, blurbg, onClose])
	useEffect(() => {
		if (open && !blurbg && typeof window !== 'undefined') {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [open, blurbg])
	if (typeof window === 'undefined') return null
	return createPortal(
		<>
			{open && blurbg && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2, ease: 'backIn' }}
					onClick={onClose}
					className={clsx('blur-bg')}
				/>
			)}

			{open && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.2, ease: 'backIn' }}
					className={clsx('popup', className)}
					ref={ref}
				>
					<div data-popupbody className='popup_body'>
						<button
							data-closepopup
							onClick={onClose}
							className={clsx('inlineFlexCenter close-popup')}
						>
							<CgClose />
						</button>
						{children}
					</div>
				</motion.div>
			)}
		</>,
		document.body
	)
})

export default Popup
