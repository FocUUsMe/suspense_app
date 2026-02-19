    import styles from "@/components/molecules/post/post.module.css"
    import { Heart } from "lucide-react";
    
    const Post = ( props ) => {
        const {children, src, title, deskript} = props;

        const isLiked = false;

        const EmptyHeart =  <Heart onClick={()=>{ isLiked = !prev }} size={24} strokeWidth={2} />
        const FilledHeart = <Heart onClick={()=>{ isLiked = !prev }} size={24} fill="white" strokeWidth={0} />
        
        return (
            <div className={styles.post}>
                <img className={styles.post_img} src={src} alt="post_image" />

                <div className={styles.post_info}>
                    <span className={styles.post_title}> {title} </span>
                    <span className={styles.post_likes}>
                        {isLiked ? <FilledHeart/> : <EmptyHeart/>}
                        {likes} 
                    </span>
                </div>

                <span className={styles.post_deskript}> {deskript} </span>
            </div>
        );
    }

    export default Post;