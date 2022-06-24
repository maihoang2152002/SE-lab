import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://www.burnsiderarebooks.com/pictures/180717002_1.jpg?v=1531856529"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Style</span>
                </div>
                <span className="postTitle">Father Book review</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Advance reading copy of the first edition. Self-bound in the
                iconic black and white dust jacket. Very Good. Reading creases
                to spine, light rubbing to wraps and several small dots of red
                ink to the bottom edge of the front wrapper, name and date of
                former owner on half-title page. A lovely copy, in an uncommon
                format. Item #180717002 Price: $2,200.00
            </p>
        </div>
    );
}
