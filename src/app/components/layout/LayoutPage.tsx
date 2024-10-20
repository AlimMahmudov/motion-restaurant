import React, { FC, ReactNode } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import scss from './LayoutPage.module.scss'
interface LayoutPageProps {
	children: ReactNode
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
	return (
		<div id={scss.Layout}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default LayoutPage