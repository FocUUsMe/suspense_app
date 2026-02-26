    import { getPosts } from "@/data/postsData";
    import Post from "../molecules/post/post";

    const Posts = async () => {
        const posts = await getPosts();

        return (
            <div>
                {posts.map((post) => {
                    return <Post 
                        key={post.id}
                        title={post.title}
                        descript={post.description}
                        pfp={post.pfp}
                        likes={post.likes}
                        src={post.image}
                    />
                })}
            </div>
        )
    }
    
    export default Posts;