import { Link } from "react-router-dom";

export default function() {
    return(
        <div id="gallery">
            <Link to="/gallery/escape-game-five">
                <img src="/src/assets/thumbnail-escape-game.png" alt="escape-game" className="thumbnail" />
                <div>Escape game</div>
            </Link>
            <Link to="/gallery/concentration-cards-bmvozm148-masashikon">
                <img src="src//assets/thumbnnail-concentration.png" alt="concentration" className="thumbnail" />
                <div>Concentration</div>
            </Link>
            <Link to="/gallery/bopomofo-typer">
                <img src="/src/assets/thumbnail-bopomofo-typer.png" alt="bopomofo-typer" className="thumbnail" />
                <div>Bopomofo typer</div>
            </Link>
        </div>
    );
}