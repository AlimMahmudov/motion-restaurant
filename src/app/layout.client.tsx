'use client'
import { useLanguageStore } from '@/stores/language-store'
import React, { useEffect } from 'react'

const LayoutClient: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const { init } = useLanguageStore()
	useEffect(() => {
		init()
	}, [init])
	return <div className='wrapper'>{children}</div>
}

export default LayoutClient
