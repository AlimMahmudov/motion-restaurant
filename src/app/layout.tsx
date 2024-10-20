import './styles/globals.scss'
import LayoutPage from './components/layout/LayoutPage'
import LayoutClient from './layout.client'

export const metadata = {
	title: 'Italian Cuisine',
	description:
		'Classic steak & delicious with delightfully unexpenced twists. The Restaurant`s sunny decor was inspired by the diners'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<LayoutClient>
					<LayoutPage>{children}</LayoutPage>
				</LayoutClient>
			</body>
		</html>
	)
}
