import "./post.css";

export default function Post({ post }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://i1.rgstatic.net/publication/356640995_Data_Structures_and_Algorithms_Made_Easy/links/61a62f816864311d938ab8d4/largepreview.png"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">{post.genres}</span>
                </div>
                <span className="postTitle">{post.title}</span>
                <hr />
                <span className="postDate">{post.publishedDate}</span>
            </div>
            <p className="postDesc">{post.description}</p>
        </div>
    );
}
