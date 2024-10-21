'use client'
import { useKeyPress } from 'ahooks'
import clsx from 'clsx'
import React, { memo } from 'react'
import { createPortal } from 'react-dom'
import { CgClose } from 'react-icons/cg'

interface IPopupProps {
	className?: string
	open: boolean
	onClose(): void
	keyover?: boolean
	blur_bg?: boolean
}

type IProps = IPopupProps & IChildren
export const Popup: React.FC<IProps> = memo(props => {
	const { className, children, onClose, open, keyover, blur_bg = false } = props

	// @ts-ignore
	useKeyPress(event => {
		if (event.key === 'Escape' && keyover) {
			onClose()
		}
	})
	return createPortal(
		<>
			{open && blur_bg && <div onClick={onClose} className={clsx('blur-bg')} />}

			<div className={clsx('popup animate', className, { active: open })}>
				<div data-popupbody className='popup_body'>
					<button
						onClick={onClose}
						className={clsx('inlineFlexCenter close-popup')}
					>
						<CgClose />
					</button>
					{children}
				</div>
			</div>
		</>,
		document.body
	)
})
