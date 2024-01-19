import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="h-12 border-b-4">
                <ul className="">
                    <div className="logo text-4xl text-lg font-bold">
                        <h1>Devos</h1>
                    </div>
                    <div className="link-container text-xl p-2">
                        <Link className="link" href='/'>Home</Link>
                        <Link className="link" href='/read'>Read</Link>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;