    'use client'
    
    import styles from "@/components/molecules/post/post.module.css"
    import { Heart } from "lucide-react";
    import { useState } from "react";
    
    const Post = ( props ) => {
        const {children, src, pfp, title, descript, likes} = props;
        const [isLiked, setIsLiked] = useState( false );

        const handleLike = () => setIsLiked(prev => !prev); 
        
        return (
            <div className={styles.post}>
                <div>
                    <img className={styles.post_img} src={src} alt="post_image" />

                    <div className={styles.post_info}>
                        <div>
                            <img className={styles.post_pfp} src={pfp} alt="pfp" />
                            <span className={styles.post_title}> {title} </span>
                        </div>

                        <div className={styles.post_likes}>
                            <Heart 
                            onClick={handleLike}
                            size={24}
                            fill={isLiked ? "red" : "white"}
                            strokeWidth={0}
                            className={styles.like_btn}
                            />
                            {isLiked ? likes + 1 : likes}
                        </div>
                    </div>
                </div>

                <span className={styles.post_deskript}> {descript} </span>
            </div>
        );
    }

    export default Post;