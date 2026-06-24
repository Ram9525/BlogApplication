import React , {useEffect, useState} from 'react'
import { Container, PostCard } from '../Components'
import appwriteservice from '../appwrite/config'
function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteservice.getPosts([]).then(posts=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

  return (
    <div className='w-full py-8'>
        <Container>
            <h1 className='text-3xl font-bold mb-8 text-gray-100'>All Posts</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard {...post} /> 
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost