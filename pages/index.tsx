import axios from 'axios'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import HomeHead from '../components/HomeHead'
import LatestBlogs from '../components/LatestBlogs'


const Home: NextPage = ({blogs}:any) => {
  
  return (
    <div className=' font-raleway'>
      <HomeHead/>
      <LatestBlogs blogs={blogs}/>
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
