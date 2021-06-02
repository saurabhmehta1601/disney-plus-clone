import MainCarousel from "../components/MainCarousel"
import Playlist from "../components/Playlist"
import Footer from "../components/Footer"

const Home = () => {
    return( <> 
    <MainCarousel /> 
    <Playlist title="Latest & Trending"/> 
    <Playlist title="Movies Recommended For You "/> 
    <Playlist title="Shows Recommended For You "/> 
    <Playlist title="Popular Movies"/> 
    <Playlist title="Trending Now"/> 
    <Footer />
    </>)
}

export default Home