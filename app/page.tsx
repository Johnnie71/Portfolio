import Hero from "./components/Sections/hero/Hero"
import TopNav from "./components/NavBar/TopNav"
import { fetchAllEntries } from "./lib/contentful/contentfulClient"
import About from "./components/Sections/about/About"
import Projects from "./components/Sections/projects/Projects"
import Connect from "./components/Sections/connect/Connect"
import ScrollArrow from "./components/icons/ScrollArrow"

const Home = async () => {
  const { heroData, aboutData, projectsData, socialsData } = await fetchAllEntries()

  return (
    <div className="font-kodeMono mx-auto max-w-screen-2xl relative">
      <div 
        className="h-screen"
        style={{ background: "linear-gradient(to bottom, black 80%, rgba(0, 0, 0, 0) 100%)" }}
      >
        <div className='fixed left-0 top-0 w-full z-50'>
          <TopNav />
        </div>
        <ScrollArrow />
        <Hero data={heroData} />
      </div>
      <div className="px-4">
        <About data={aboutData} />
        <Projects projects={projectsData} />
        <Connect socials={socialsData} />
      </div>
    </div>
  )
}

export default Home
