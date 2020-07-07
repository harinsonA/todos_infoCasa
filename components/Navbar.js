import Link from "next/link";
const NaveBar = () => (
  <nav>
    <div className="container">
      <div className="conten-nav ">
        <Link href="/create">
          <button className="btn"> Create </button>
        </Link>

        <button className="btn"> Delete </button>
      </div>
    </div>
  </nav>
);
export default NaveBar;
