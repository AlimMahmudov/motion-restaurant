interface IChildren {
	children: React.ReactNode
}

interface IChildrenToFunc<T> {
	children: (props: T) => React.ReactNode
}

type TypeLanguage = 'en' | 'ru' | 'kg'

type PageProps<
	P extends string[] = string[],
	SP extends string[] = string[]
> = {
	params: Record<P[number], string>
	searchParams: Record<SP[number], string>
}
