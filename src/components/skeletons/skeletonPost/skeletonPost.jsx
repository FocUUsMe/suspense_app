    import { postsData } from "@/data/postsData";
    import './skeletonPost.css';

    const SkeletonPost = () => {
        let skeleton_data = [1, 2, 3, 4, 5, 6];

        return (
            <div className="skeleton_post">
                {skeleton_data.map(post => <div key={post} className="skeleton_post">
                    <div className="skeleton_main_group">
                        <div className="skeleton_post_img"></div>

                        <div className="skeleton_post_info">
                            <div>
                                <div className="skeleton_post_pfp"></div>
                                <div className="skeleton_post_title"></div>
                            </div>

                            <div className="skeleton_post_likes"></div>
                        </div>
                    </div>

                    <div className="skeleton_post_desc"></div>                    
                </div>)}
            </div>
        )
    }

    export default SkeletonPost;
