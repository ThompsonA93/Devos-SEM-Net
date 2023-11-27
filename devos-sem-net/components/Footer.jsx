import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="border-t-4 grid grid-cols-3 gap-3">
            <div className="column">
                <section className="m-4">
                    <p>Build: 0.01.2023</p>                    
                </section>
            </div>
            <div className="column">
                <section className="m-4">
                    Ressources <br />
                    <Link className="ml-2" href="https://github.com/ThompsonA93/Devos-Frontend">Frontend</Link><br />
                    <Link className="ml-2" href="https://github.com/ThompsonA93/Devos-ETH-Net">ETH-Net</Link><br />
                    <Link className="ml-2" href="https://github.com/ThompsonA93/Devos-LINK-Net">LINK-Net</Link><br />
                    <Link className="ml-2" href="https://github.com/ThompsonA93/Devos-SEM-Net">SEM-Net</Link><br />
                </section>
            </div>

            <div className="column">
            <section className="m-4">
                    Powered by <br />
                    <Link className="ml-2" href="https://vercel.com">Vercel.com</Link><br />
                    <Link className="ml-2" href="https://nextjs.org/">Nextjs.org</Link><br />
                    <Link className="ml-2" href="https://neo4j.com/">Neo4J.com</Link><br />
                </section>
            </div>
        </div>
    );
}

export default Footer;