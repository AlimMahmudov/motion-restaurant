import React from 'react'
import OurMenu from './sections/ourMenu/OurMenu'

const MenuPage: React.FC<PageProps> = ({ searchParams }) => {
	return (
		<>
			<OurMenu categoryId={searchParams.category_id} />
		</>
	)
}

export default MenuPage
