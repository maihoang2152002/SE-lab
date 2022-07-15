import "./post.css";

export default function Post({ post }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://www.burnsiderarebooks.com/pictures/180717002_1.jpg?v=1531856529"
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
