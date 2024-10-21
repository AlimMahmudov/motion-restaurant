/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import locales from '@/shared/locales'
import { create } from 'zustand'

interface ILanguageStore {
	language: TypeLanguage
	translations: Record<string, Record<string, any>>
	switchLanguage: () => void
	$t: <T>(key: string, ns: string) => T
	init(): void
}

export const useLanguageStore = create<ILanguageStore>()((set, get) => ({
	language:
		typeof window !== 'undefined' && localStorage.getItem('lang')
			? (JSON.parse(localStorage.getItem('lang')!) as TypeLanguage)
			: 'en',
	translations: locales,
	switchLanguage: () => {
		const currentLanguage = get().language
		let newLanguage: TypeLanguage

		switch (currentLanguage) {
			case 'en':
				newLanguage = 'ru'
				break
			case 'ru':
				newLanguage = 'kg'
				break
			case 'kg':
				newLanguage = 'en'
				break
			default:
				newLanguage = 'en'
		}

		set({ language: newLanguage })
	},
	$t: (key: string, ns: string) => {
		const lang = get().language
		const translation = get().translations[lang]?.[ns]

		const keys = key.split('.')
		let result = translation

		for (const k of keys) {
			result = result?.[k]
			if (!result) return key
		}

		return result || key
	},
	init() {
		if (typeof window !== 'undefined') {
			document.body?.setAttribute('class', get().language)
		}
	}
}))
