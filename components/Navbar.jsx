const Navbar = () => {
  return (
    <nav>
        <div className="top">
            <span>
            <img src="/public/logo.svg" alt="logo" />
        </span>
        <h1>LOGO</h1>
        <ul>
            <li><a href="">Search logo</a></li>
            <li><a href="">whislist</a></li>
            <li><a href="">cart</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Login</a></li>
        </ul>
        </div>
        <div className="bottom">
            <ul>
                <li><a href="">SHOP</a></li>
                <li><a href="">SKILLS</a></li>
                <li><a href="">STORIES</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT US</a></li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar