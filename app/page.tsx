import Hero from "./components/hero/Hero"
import TopNav from "./components/NavBar/TopNav"
import { fetchAllEntries } from "./lib/contentful/contentfulClient"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Socials from "./components/Social/Socials"

const Home = async () => {
  const { heroData, aboutData, projectsData, socialsData } = await fetchAllEntries()

  return (
    <div className="font-kodeMono mx-auto max-w-screen-2xl relative">
      <TopNav />
      <div className="px-4">
        <Hero data={heroData} />
        <About data={aboutData} />
        <Projects projects={projectsData} />
        <Socials socials={socialsData} />
      </div>
    </div>
  )
}

export default Home
