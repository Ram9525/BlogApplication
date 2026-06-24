import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (isSubmitting) return; // Prevent multiple submissions
        
        setIsSubmitting(true);
        
        try {
            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                console.log("data:", data);
                
                const file = await appwriteService.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    console.log(userData.$id);
                    
                    const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="max-w-4xl mx-auto bg-gray-800 shadow-2xl rounded-xl p-6 mt-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Side (Title, Slug, Content) */}
                <div className="md:col-span-2 space-y-4">
                    <Input
                        label="Title"
                        placeholder="Enter post title"
                        className="w-full text-white"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug"
                        placeholder="Slug"
                        className="w-full text-white"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                </div>

                {/* Right Side (Image, Status, Submit) */}
                <div className="space-y-4">
                    <Input
                        label="Featured Image"
                        type="file"
                        className="w-full border rounded-lg px-4 py-2 text-white"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />

                    {post && (
                        <div className="w-full">
                            <img
                                src={appwriteService.getFileView(post.featuredImage)}
                                alt={post.title}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    )}

                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="w-full"
                        {...register("status", { required: true })}
                    />

                    <Button 
                        type="submit" 
                        bgColor={isSubmitting ? "bg-gray-400" : (post ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700")}
                        className="w-full cursor-pointer text-white font-semibold py-3 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            post ? "Update Post" : "Create Post"
                        )}
                    </Button>
                </div>
            </div>
        </form>
    );
}
