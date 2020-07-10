import Link from "next/link";
const NaveBar = () => (
  <nav>
    <div className="container">
      <div className="conten-nav ">
        <Link href="/create">
          <button className="btn"> Create </button>
        </Link>
      </div>
    </div>
  </nav>
);
export default NaveBar;
