import { Link } from "react-router-dom";

export default () => {
  return (
    <header>
      <ul className="flex justify-end font-medium text-raisin-black-600">
        <li ><Link className=" p-8" to="">Home</Link></li>
        <li className=" p-8">Projects</li>
        <li className=" p-8">Digital art</li>
        <li className=" p-8">Photography</li>
      </ul>
    </header>
  );
}
