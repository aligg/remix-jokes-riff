import { Link } from "remix";
import squirrel from "../../public/squirrel.svg";
import stylesUrl from "../styles/index.css";

export let links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div>
      <h4>Click the squirrel for a joke</h4>
      <Link to="/jokes">
        <img id="squirrel" width="200" height="100" src={squirrel}></img>
      </Link>
    </div>
  );
}
