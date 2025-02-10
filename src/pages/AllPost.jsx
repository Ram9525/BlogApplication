import React , {useEffect, useState} from 'react'
import { Container, PostCard } from '../Components'
import appwriteservice from '../appwrite/config'
function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteservice.getPosts([]).then(posts=>{
            if(posts){
                // console.log(posts);
                setPosts(posts.documents)
            }
        })
    },[])
    //always spread the props in react components if they are accepting destructured props
  return (
    <div>
        <Container>
        <div className='flex flex-wrap lg:flex-wrap gap-4 py-3'>
                {posts.map((post) => (
                    <div key={post.$id} className='w-[400px]'>
                        <PostCard {...post} /> 
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost