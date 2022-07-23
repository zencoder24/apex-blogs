import axios from 'axios'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = ({blogs}:any) => {
  
  return (
    <div >
      <Navbar/>
      <h1 className='btn'>{blogs[1].attributes.title}</h1>
      <h1 className='btn'>{blogs[0].attributes.title}</h1>
   </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const blogRes = await axios.get("http://localhost:1337/api/blogs")

    return{
      props: {
        blogs: blogRes.data.data
    }
    }
  }
  
  

export default Home
