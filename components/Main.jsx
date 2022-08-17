import Link from "next/link";

function Main() {
  return (
    <>
      <section>
        <div className="bg-purple-200 h-screen">
          <ul className="flex justify-between px-12 py-12">
            <li>
              <Link href="/SHorizontal">SHorizontal</Link>
            </li>
            <li>menu2</li>
            <li>menu3</li>
          </ul>
          <div className="bg-purple-200 h-screen flex items-center justify-center">
            <p>Section 1</p>
          </div>
        </div>
        <div className="bg-red-200 h-screen flex items-center justify-center">
          <p>Section 2</p>
        </div>
        <div className="bg-green-200 h-screen flex items-center justify-center">
          <p>Section 3</p>
        </div>
      </section>
    </>
  );
}

export default Main;
