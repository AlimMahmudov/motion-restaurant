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
interface IChildrenToProps {
	onClose(): void
}

interface IDropdownProps extends IChildrenToFunc<IChildrenToProps> {
	trigger(props: DropdownTrigger): JSX.Element
	isOutsideClick?: boolean
	className?: string
	pt?: 'centered' | 'default'
}

const Dropdown: React.FC<IDropdownProps> = memo(props => {
	const {
		className,
		trigger,
		isOutsideClick = false,
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
		<div className={clsx(className, 'relative inlineFlexCenter')} ref={ref}>
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
				ref={contentEl}
			>
				{children({ onClose: () => set(false) })}
			</div>
		</div>
	)
})

Dropdown.displayName = 'Dropdown'

export default Dropdown
