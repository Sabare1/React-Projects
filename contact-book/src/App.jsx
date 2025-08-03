import Contact from './components/Contact'
import mrWhiskerson from './images/mr-whiskerson.png'
import fluffykins from './images/fluffykins.png'
import felix from './images/felix.png'
import pumpkin from './images/pumpkin.png'

function App() {
    return (
      <>
        <Contact
        img={mrWhiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
        ></Contact>
        <Contact
        img={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        mail="fluff@me.com"
        ></Contact>
        <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com"
        ></Contact>
        <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        mail="pumpkin@scrimba.com"
        ></Contact>
      </>
        
    )
}

export default App