/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { memo, useEffect, useRef } from 'react'
import { useToggle, useClickAway } from 'ahooks'
import clsx from 'clsx'
interface DropdownTrigger {
	toggle(): void
	state: boolean
	ref: React.MutableRefObject<any>
}

interface IDropdownProps extends IChildren {
	trigger(props: DropdownTrigger): JSX.Element
	isOutsideClick?: boolean
	internalClick?: boolean
	className?: string
	pt?: "centered" | 'default'
}

const Dropdown: React.FC<IDropdownProps> = memo(props => {
	const {
		className,
		trigger,
		isOutsideClick = false,
		internalClick = true,
		children,
		pt = 'default'
	} = props
	const [state, { toggle, set }] = useToggle(false)
	const ref = useRef<HTMLDivElement>(null)
	useClickAway(() => {
		if (isOutsideClick) {
			set(false)
		}
	}, ref)
	const _internalClick = () => internalClick && set(false)
	const contentEl = useRef<HTMLDivElement>(null)
	const anchorEl = useRef<any>(null)
	useEffect(() => {
		if (contentEl.current && anchorEl.current && pt == 'centered') {
			const tooltip_width = contentEl.current.offsetWidth
			const anchor_width = anchorEl.current.offsetWidth

			contentEl.current.style.setProperty(
				'--dropdown-left',
				`-${tooltip_width / 2 - anchor_width / 2}px`
			)
		}
	}, [anchorEl, contentEl, pt])
	return (
		<div className={clsx(className, 'relative inlineBlock')} ref={ref}>
			{trigger({
				toggle,
				state,
				ref: anchorEl
			})}
			<div
				className={clsx('absolute animate transform-yb', {
					active: state
				})}
				data-content='true'
				onClick={_internalClick}
				ref={contentEl}
			>
				{children}
			</div>
		</div>
	)
})

Dropdown.displayName = 'Dropdown'

export default Dropdown
