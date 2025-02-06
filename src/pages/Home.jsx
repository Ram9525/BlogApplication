import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, Loader, PostCard} from '../Components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                // console.log(posts);
                
                setPosts(posts.documents)
                setLoading(false)
            }
        })
    }, [])
    // if (posts.length === 0) {
    //     return (
    //         loading?<Loader/>:
    //         <div className="w-full py-8 mt-4 text-center h-screen">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     )
    // }
    return (
        loading?<Loader/>:
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home