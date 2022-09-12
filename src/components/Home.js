import CardTest from "./Card"
import Badges from "./Badges"
import Footer from "./Footer"
import FooterModernTest from "./FooterModern"
import Navbar from "./Navbar"

export default function Home() {
  
  const data = [{
    title: 'Title 1',
    description: 'Description 1'
  }, {
    title: 'Title 2',
    description: 'Description 2'
  }]

  return (
    <>
      <h1>HOME</h1>
      <div>
        This is home
      </div>
      <div>
        <Navbar />
        <Badges title={'MY BADGES'} data={'These are my badges'} />
        {data.map(item => <CardTest key={item.title} title={item.title} description={item.description} />)}
        <Footer />
        <FooterModernTest />
      </div>
    </>
  )
}
