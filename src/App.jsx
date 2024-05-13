import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import './App.css'
import { useEffect, useState } from "react"

export default function App() {

  const [contacts, setContacts] = useState(() => {
    const saveContact = localStorage.getItem("save-contacts");
    return saveContact !== null ? JSON.parse(saveContact) :
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  }

  )

  useEffect(() => {
    localStorage.setItem("save-contacts", JSON.stringify(contacts))
  }, [contacts])

  const onAdd = (newDate) => {
    setContacts(() => {
      return [...contacts, newDate]
    })
  }

  const onDelete = (nameId) => {
    setContacts((present) => {
      return present.filter((item) => item.id !== nameId)
    })
  }

  const [search, setSearch] = useState("")

  const contactFilter = contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1 className="header">Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList onDelete={onDelete} contacts={contactFilter} />
    </div>

  )
}