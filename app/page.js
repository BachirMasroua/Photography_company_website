import About from '@/comps/About'
import Banner from '@/comps/Banner'
import Contact from '@/comps/Contact'

export default function Home() {
  return (
    <div>
      <Banner image="/images/banner.jpg" text="Transforming Moments into" span="Memories" text_color="black" />
      <About />
      <Contact />
    </div>
  )
}
