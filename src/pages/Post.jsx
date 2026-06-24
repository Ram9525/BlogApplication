import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../Components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                    <div className="w-full relative">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-96 object-cover"
                        />

                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="p-8">
                        <h1 className="text-4xl font-bold mb-6 text-gray-100">{post.title}</h1>
                        <div className="prose prose-invert max-w-none text-gray-300">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}