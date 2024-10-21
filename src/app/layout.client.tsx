'use client'
import { queryClient } from '@/shared/config/query-client'
import { useLanguageStore } from '@/shared/stores/language-store'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect } from 'react'

const LayoutClient: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const { init } = useLanguageStore()
	useEffect(() => {
		init()
	}, [init])
	return (
		<div className='wrapper'>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</div>
	)
}

export default LayoutClient
