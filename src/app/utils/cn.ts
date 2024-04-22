import clsx, { ClassValue } from "clsx"; // Importiere die clsx-Funktion und den ClassValue-Typ aus dem clsx-Paket
import { twMerge } from "tailwind-merge"; // Importiere die twMerge-Funktion aus dem tailwind-merge-Paket

export function cn(...inputs: ClassValue []) { // Exportiere eine Funktion namens 'cn', die eine Variable Anzahl von Klassenwerten akzeptiert
    return twMerge(clsx(...inputs)); // Verwende clsx, um die Klassenwerte zu kombinieren, und anschließend twMerge, um die Tailwind CSS-Klassen zu fusionieren
}

//...inputs: Das ... ist der Rest-Parameter in JavaScript. Er erlaubt es, eine beliebige Anzahl von Argumenten an eine 
//Funktion zu übergeben und sie als Array innerhalb der Funktion zu verwenden. In diesem Fall akzeptiert die Funktion cn 
//eine beliebige Anzahl von Klassenwerten als Argumente.
//(...inputs: ClassValue []): Hier wird TypeScript verwendet, um den Parametertyp zu definieren. 
//ClassValue ist ein spezieller Typ, der Klassenwerte in React-Anwendungen repräsentiert, wie sie von Bibliotheken wie clsx 
//verwendet werden. Das [] am Ende bedeutet, dass es sich um ein Array dieses Typs handelt.
//{}: Diese geschweiften Klammern sind Teil der Syntax für die Definition einer Funktion in TypeScript. 
//In diesem Fall werden sie verwendet, um den Funktionskörper zu umschließen.
//Zusammengefasst ermöglicht diese Funktionsdefinition, eine Funktion namens cn zu erstellen, die eine beliebige Anzahl von 
//Klassenwerten akzeptiert und sie mithilfe von clsx und twMerge kombiniert, um die Tailwind CSS-Klassen zu fusionieren.