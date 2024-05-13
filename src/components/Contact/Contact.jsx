import { IoMdContacts } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";

export default function Contact({ contacts: { name, number, id }, onDelete }) {
	return (
		<>
			<li className={css.item} >
				<div className={css.contact}>
					<h3 className={css.name}><IoMdContacts /> {name}</h3>
					<p className={css.descr}><FaPhone /> {number}</p>
				</div>
				<button className={css.button} onClick={() => onDelete(id)}>Delete</button>
			</li>
		</>
	);
}