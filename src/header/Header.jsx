import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Note</span>
                <span className="headerTitlesLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg"
                alt=""
            />
        </div>
    );
}
