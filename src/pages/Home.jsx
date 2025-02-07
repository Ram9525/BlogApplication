import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Loader, PostCard } from "../Components";

function Home() {
    const [posts, setPosts] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loader />; 
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap gap-4">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div 
                                key={post.$id} 
                                className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                            >
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className="p-2 w-full text-center">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No posts yet, login to create
                            </h1>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Home;
