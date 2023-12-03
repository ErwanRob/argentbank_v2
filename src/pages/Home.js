import Footer from '../components/footer'
import Header from '../components/header'
import Banner from '../components/banner'
import Services from '../components/services'

function Home() {
    return (
        <div className="Home">
            <Header />
            <main>
                <Banner />
                <Services />
            </main>
            <Footer />
        </div>

    )
}

export default Home;