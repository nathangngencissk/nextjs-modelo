import '../styles/index.css'
import axios from 'axios'

function Home({name}) {
    return  <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple leading-normal">Next.js</h1>
    <p className="text-grey-dark">with Tailwind CSS</p>
    <h2 className="text-purple leading-normal">{name}</h2>
  </div>
  }

  Home.getInitialProps = async ({ req }) => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/dragonite')
    return { name: res.data.name }
  }
  
  export default Home

