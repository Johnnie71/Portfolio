import Hero from "./components/hero/Hero"
import TopNav from "./components/NavBar/TopNav"
import { fetchAllEntries } from "./lib/contentful/contentfulClient"

const Home = async () => {
  const { heroData } = await fetchAllEntries()

  return (
    <div className="flex justify-center">
      <TopNav />
      <Hero data={heroData} />
    </div>
  )
}

export default Home
