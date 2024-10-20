/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { memo, useEffect, useRef } from 'react'
import { useToggle, useClickAway, useSize } from 'ahooks'
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
	pt?: 'centered' | 'default'
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
	const contentSize = useSize(contentEl)
	const anchorSize = useSize(anchorEl)
	useEffect(() => {
		if (contentEl.current && pt == 'centered') {
			contentEl.current.style.setProperty(
				'--dropdown-left',
				`-${Number(contentSize?.width) / 2 - Number(anchorSize?.width) / 2}px`
			)
		}
	}, [anchorSize, contentSize, contentEl, pt])
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
