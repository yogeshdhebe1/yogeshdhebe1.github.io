import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import { profile } from './data'

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero /><About /><Work /><Experience /><Skills /><Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-mute sm:px-8">
          <span className="font-display font-extrabold text-bone">YD</span>
          <span>© {new Date().getFullYear()} {profile.full}</span>
          <a href="#top" className="hover:text-gold">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
