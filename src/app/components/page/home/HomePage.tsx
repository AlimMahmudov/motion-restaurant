import About from './sections/about/About'
import Best from './sections/best/Best'
import Hero from './sections/hero/Hero'
import ModernInterior from './sections/modern/ModernInterior'
import MainMenu from './sections/nainMenu/MainMenu'
import Visit from './sections/visit/Visit'

const HomePage = () => {
	return (
		<>
			<Hero />
			<About />
			<Best />
			<MainMenu />
			<ModernInterior />
			<Visit />
		</>
	)
}

export default HomePage
