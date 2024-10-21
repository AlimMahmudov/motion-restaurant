/* eslint-disable @next/next/no-img-element */
'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React, { memo, useCallback, useMemo, useState } from 'react'

interface ImageProps {
	url: string
	alt?: string
	className?: string
	width: number
	height: number
}

const CImage: React.FC<ImageProps> = memo(
	({ url, alt = 'Image', className, width, height }) => {
		const [isLoading, setIsLoading] = useState<boolean>(true)
		const [hasError, setHasError] = useState<boolean>(false)

		const handleLoadingComplete = useCallback(() => {
			setIsLoading(false)
		}, [])

		const handleError = useCallback(() => {
			setHasError(true)
			setIsLoading(false)
		}, [])

		const formattedUrl = useMemo(() => {
			if (url.startsWith('http://') || url.startsWith('https://')) {
				return url
			} else if (typeof window !== 'undefined') {
				return `${window.location.origin}${url}`
			}
			return ''
		}, [url])

		return (
			<div
				className={clsx(className, 'inlineFlexCenter custom-image', {
					loading: isLoading
				})}
			>
				{isLoading && !hasError && <div className='loader v2 small abs'></div>}
				{!hasError && (
					<Image
						src={formattedUrl}
						alt={alt}
						onLoad={handleLoadingComplete}
						onError={handleError}
						width={width}
						height={height}
						loading='lazy'
					/>
				)}
				{hasError && (
					<div className='error-message'>Ошибка загрузки изображения</div>
				)}{' '}
			</div>
		)
	}
)

export default CImage
