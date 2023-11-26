import { Link } from "react-router-dom"

import css from "./FilmList.module.css"

export default function FilmList({list}) {
    return (
        <ul className={css.list}>
            {list.map(element => 
                <li className={css.listItem} key={element.id}>
                    <Link className={css.listLink} to={element.id}>{element.original_title}</Link>
                </li>
            )}
        </ul>
    )
}