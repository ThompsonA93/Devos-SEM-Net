import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul className="">
                <div className="logo">
                    <h1>Devos</h1>
                </div>

                <div className="link-container">
                    <Link className="link" href='/'>Home</Link>
                    <Link className="link" href='/create'>Create</Link>
                    <Link className="link" href='/read'>Read</Link>
                    <Link className="link" href='/update'>Update</Link>
                    <Link className="link" href='/delete'>Delete</Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;