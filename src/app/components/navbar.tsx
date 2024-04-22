import React from "react"; // Importiere das React-Paket, um React-Komponenten zu erstellen
import { FaCloudSun } from "react-icons/fa"; // Importiere das CloudSun-Icon aus dem react-icons-Paket
import { MdMyLocation } from "react-icons/md"; // Importiere das MyLocation-Icon aus dem react-icons-Paket
import { GrLocation } from "react-icons/gr"; // Importiere das Location-Icon aus dem react-icons-Paket
import Searchbox from "./searchbox"; // Importiere die Searchbox-Komponente aus der Datei searchbox.js im selben Verzeichnis

type Props = {} // Definiere den Typ für die Props der Navbar-Komponente

export default function Navbar({ }: Props) { // Definiere die Navbar-Komponente mit leeren Props als Argument
    return (
        <nav className="shadow-sm px-20 sticky top-0 left-0 z-50 bg-white"> {/* Das Navigationsmenü mit festem oberen Rand und weißem Hintergrund */}
            <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto"> {/* Ein Container für den Inhalt des Navigationsmenüs */}
                <div className="flex items-center justify-center gap-2 "> {/* Ein Container für den Titel und das Wetter-Icon */}
                    <h2 className="text-gray-500 text-3xl">Weather</h2> {/* Der Titel "Weather" */}
                    <FaCloudSun className="text-3xl mt-1 text-yellow-500" /> {/* Das Wetter-Icon in gelber Farbe */}
                </div>
                {/* Bereich für die Standort-Symbole und die aktuelle Position */}
                <section className="flex gap-2 items-center">
                    <MdMyLocation className="text-2xl text-gray-400 hover:opacity-70 cursor-pointer " /> {/* Das Standort-Symbol für die aktuelle Position */}
                    <GrLocation className="text-2xl" /> {/* Das allgemeine Standort-Symbol */}
                    <p className="text-slate-900/80 text-sm"> Scotland </p> {/* Der aktuelle Standort (Schottland) */}
                    <div>{/* SearchBox */}
                        <Searchbox value={""} onChange={undefined} onSubmit={undefined} /> {/* Die Suchbox-Komponente */}
                    </div>
                </section>
            </div>
        </nav>
    );
}

// 'export default' wird verwendet, um die Navbar-Komponente als Standardexport der Datei zu definieren, was bedeutet, 
//dass sie ohne geschweifte Klammern importiert werden kann.
// Die leeren geschweiften Klammern {} in der Funktionsdeklaration destrukturieren die Props, sind in diesem Fall jedoch unnötig,
// da die Navbar-Komponente keine Props verwendet.
// 'type Props = {}' definiert den Typ für die Props der Navbar-Komponente, obwohl in diesem Fall keine Props verwendet werden. 
//Es ist jedoch eine gängige Praxis, einen leeren Props-Typ zu definieren, um die Verwendung von Props in der Zukunft zu erleichtern.
