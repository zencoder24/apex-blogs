import axios from 'axios'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import LatestBlogs from '../components/LatestBlogs'


const Home: NextPage = ({blogs}:any) => {
  
  return (
    <>
      <LatestBlogs blogs={blogs}/>
   </>
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
