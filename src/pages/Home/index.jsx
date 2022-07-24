import './style.scss'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ListCard from '../../components/ListCard'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Banner page="home" />
      <ListCard />
      <Footer />
    </div>
  )
}

export default Home
