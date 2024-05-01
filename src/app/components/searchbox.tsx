import React from "react"; // Importiere das React-Paket, um React-Komponenten zu erstellen
import { IoMdSearch } from "react-icons/io"; // Importiere das Search-Icon aus dem react-icons-Paket
import { cn } from "../utils/cn"; // Importiere die cn-Funktion aus einem benutzerdefinierten Utility-Modul

type Props = { // Definiere den Typ für die Props des Searchbox-Komponenten
    className?: string // Optionaler Klassenname für zusätzliches Styling
    value: string; // Der aktuelle Wert des Eingabefelds
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; // Event-Handler für Änderungen im Eingabefeld
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined; // Event-Handler für das Absenden des Formulars
}

export default function Searchbox(props: Props) { // Definiere die Searchbox-Komponente mit den Props als Argument
    return (
        <form onSubmit={props.onSubmit} // Wenn das Formular abgesendet wird, führe die onSubmit-Funktion aus
        className={cn("flex relative items-center justify-center h-10",
            props.className
        )}> 
        {/* Füge Klassen hinzu, die Flexbox verwenden, um die Elemente anzuordnen */}
        {/* props.className ermöglicht die Hinzufügung benutzerdefinierter Klassen */}
        <input 
            type="text" // Eingabefeld-Typ ist Text
            defaultValue={props.value} // Der Wert des Eingabefelds wird durch die Props gesteuert
            onChange={props.onChange} // Wenn sich der Wert des Eingabefelds ändert, führe die onChange-Funktion aus
            placeholder="Search location.." // Platzhaltertext im Eingabefeld
            className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none
            focus:border-green-600 h-full" 
        />
        <button className="px-4 py-[9px] bg-green-600 text-white rounded-r-md 
        focus:outline-none hover:bg-green-500 h-full">
        <IoMdSearch />
        </button>
    </form>
);
}

// Props sind Parameter, die an Komponenten übergeben werden, um sie anzupassen oder Daten zu übergeben.
// Die 'cn' Funktion stammt aus einem benutzerdefinierten Utility-Modul (Datei: cn.js), das verwendet wird, 
//um Klassen dynamisch zusammenzuführen.
// Utility-Module sind Module, die allgemeine Hilfsfunktionen enthalten, die in verschiedenen Teilen einer Anwendung 
//verwendet werden können, um Code zu organisieren und zu vermeiden, dass derselbe Code an verschiedenen Stellen dupliziert wird.