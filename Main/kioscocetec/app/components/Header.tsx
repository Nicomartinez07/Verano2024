const Header = () => {
    return(
        <header>
            <div className="container">
                <a href="/">
                    <h1 className="titulo">𝙆𝙄𝙊𝙎𝘾𝙊 𝘾𝙀𝙏𝙀𝘾</h1>
                </a>
                <div className="header">
                    <li> 
                        <a data-radix-collection-item="" href="/">Home</a>
                    </li>
                    <input placeholder="Busca" type="search" value="" name="search"></input>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                </div>
            </div>
        </header>
    )
}

export default Header;
