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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id}>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <h1 className="text-2xl font-bold text-gray-400 hover:text-gray-300">
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
