//C#
//int x1 = 100;

x1 = 100;

//Console.WriteLine(x1);
print(x1); 


//Rechnung in Variablen
let x = 41.5 + 1.2;
y = 67;

print(x);
print(y);

print("Modulus von y durch 66: " + (y % 66));

//PrintAusgabe
print("Test");

//Rechnung in Print
print("Ergebnis der Rechnung von X + Y: " + (x + y));

//Ausgabe mit deutschem Syntax
ausgeben("TestMitDeutsch");
ausgeben("AUSGEBEN des Ergebnis der Rechnung von X + Y: " + (x + y));


//IfStatement Englisch
j = 29;
if(j == 30){
    print("j ist 30");
} 
else if(j == 41){
    print("j ist 41");
}
else {
    print("j ist "+j);
}

//IfStatmement Deutsch
z = 41;
falls(z == 40){
    ausgeben("z ist 40");
} 
sonst falls(z == 41){
    ausgeben("z ist 41");
}
sonst {
    ausgeben("z ist nicht 40");
}

//Boolean Variablen Englisch
bedingung = true;
print("Die Bedingung ist: " + bedingung);


//Boolean Variablen Deutsch
falschBool = falsch;
ausgeben("Falsch ist: " + falsch);


//For Schleife Englisch
for(i = 0; i < 5; i = i + 1){
    print("i ist: " + i);
}

//For Schleife Deutsch
für(k = 0; k < 20; k = k + 5){
    ausgeben("k ist: " + k);
}


//While Schleife Englisch
p = 0;
while(p < 3){
    print("p ist: " + p);
    p = p + 1;
}

//While Schleife Deutsch
q = 0;
während(q < 3){
    ausgeben("q ist: " + q);
    q = q + 1;
}

//Repeat Schleife Englisch
b = 0;
repeat (b < 5) {
    print("b ist: " + b);
    b = b + 1; // wichtig, sonst bleibt die Bedingung true
}

//Repeat Schleife Deutsch
m = 0;
wiederhole (m < 5){
    ausgeben("m ist: " + m);
    m = m + 1;
}

let names = ["Anna", "Ben", "Cara"];
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

print("First name: " + names[0]);
print("Middle row, last value: " + matrix[1, 2]);

matrix[0][1] = 42;
names[2] = names[2] + " 🚀";

print("Names array: " + names);
print("Matrix row 0: " + matrix[0]);

let total = matrix[0][0] + matrix[1, 1] + matrix[2][2];
print("Diagonal sum: " + total);


//Dateioperationen Read Englisch
fileContent = File.Read("beispiel.txt"); //Groß und kleinschreibung möglicgh
print("Dateiinhalt: " + fileContent);


//Dateioperationen Write Englisch
File.Write("output.txt", "Hsaidhasiudhasoj.");


//Dateioperationen Deutsch
dateiInhalt = Datei.lies("output.txt");
ausgeben("Dateiinhalt " + dateiInhalt);

//Dateioperationen Schreiben Deutsch
Datei.schreibe("beispiel2.txt", "Das ist ein Test.");

//Dateioperationen Append Englisch
File.Append("beispiel2.txt", "\nNeue Zeile angehängt.");

//Dateioperationen Anhängen Deutsch
Datei.anhängen("beispiel2.txt", "\tNoch eine angehängte Zeile.");

//File Existence Check Englisch
print(File.exists("beispiel2.txt"));

//File Existence Check Deutsch
print(Datei.existiert("nichtExistenteDatei.txt"));

//String methoden englisch 
s = "  Hallo Welt  ";
print("length: " + s.length());
print("len: " + s.len());
print("upper: " + s.upper());
print("lower: " + s.lower());
print("trim: '" + s.trim() + "'");
print("contains 'Welt': " + s.contains("Welt"));
print("startsWith '  Ha': " + s.startsWith("  Ha"));
print("endsWith '  ': " + s.endsWith("  "));
print("substring(2, 7): " + s.substring(2, 7));
print("replace: " + s.replace("Welt", "Universe"));
parts = s.split(" ");
print("split: " + parts);

//String methoden deutsch
t = "  Grüß Gott  ";
ausgeben("länge: " + t.länge());
ausgeben("gross: " + t.groß());
ausgeben("klein: " + t.klein());
ausgeben("trimmen: '" + t.trimmen() + "'");
ausgeben("enthält 'Gott': " + t.enthält("Gott"));
ausgeben("beginntMit '  Grü': " + t.beginntMit("  Grü"));
ausgeben("endetMit '  ': " + t.endetMit("  "));
ausgeben("teil(2, 7): " + t.teil(2, 7));
ausgeben("ersetze: " + t.ersetze("Gott", "Welt"));
teile = t.aufteilen(" ");
ausgeben("aufteilen: " + teile);


//Advanced Loop Englisch
text = "Hello";
for(i = 0; i < text.length(); i = i + 1){
    print("char at " + i + ": " + text.substring(i, i + 1));
}

//Advanced Loop Deutsch
text2 = "Hallo";
für(i = 0; i < text2.länge(); i = i + 1){
    ausgeben("Zeichen " + i + ": " + text2.teil(i, i + 1));
}

//Funktionen englisch
def greet(name) {
    return "Hello " + name;
}
print(greet("Max"));

def add(a, b) {
    return a + b;
}
print(add(2, 3));

//Funktionen deutsch
funktion begrüß(name) {
    zurück "Hallo " + name;
}
ausgeben(begrüß("Max"));

funktion addiere(a, b) {
    zurück a + b;
}
ausgeben(addiere(5, 7));

if (x < 50) {
    print("This is true");
} else {
    print("This is false");
}


// Variablen + Booleans (NO)
la navn = "Ola";
la alder = 25;
aktiv = sann;
ferdig = usann;
skriv("Navn: " + navn + ", alder: " + alder);
skriv("aktiv=" + aktiv + ", ferdig=" + ferdig);

// Bedingungen (NO)
hvis (alder >= 18) {
    skriv("Voksen");
} ellers hvis (alder == 17) {
    skriv("Nesten voksen");
} ellers {
    skriv("Mindrearig");
}

// For-Schleife (NO/EN keyword for)
for (n = 0; n < 4; n = n + 1) {
    skriv("for n=" + n);
}

// While-Schleife (NO)
teller = 0;
mens (teller < 3) {
    skriv("mens teller=" + teller);
    teller = teller + 1;
}

// Repeat-Schleife (NO)
r = 0;
gjenta (r < 3) {
    skriv("gjenta r=" + r);
    r = r + 1;
}

// Arrays + Indexzugriff
la farger = ["rod", "gronn", "bla"];
la tall = [10, 20, 30];
skriv("Farge 0: " + farger[0]);
skriv("Tall 1: " + tall[1]);
tall[2] = 99;
skriv("Tall nach Update: " + tall);

// Datei-IO (NO)
Fil.skriv("norsk.txt", "Hei fra Leap");
Fil.leggTil("norsk.txt", "\nNy linje");
filInnhold = Fil.les("norsk.txt");
skriv("Filinnhold: " + filInnhold);
skriv("Fil eksisterer: " + Fil.eksisterer("norsk.txt"));

// String-Methoden (NO)
tekst = "  Hei Verden  ";
skriv("lengde: " + tekst.lengde());
skriv("stor: " + tekst.stor());
skriv("liten: " + tekst.liten());
skriv("trimm: '" + tekst.trimm() + "'");
skriv("inneholder 'Ver': " + tekst.inneholder("Ver"));
skriv("starterMed '  He': " + tekst.starterMed("  He"));
skriv("slutterMed '  ': " + tekst.slutterMed("  "));
skriv("delstreng(2, 5): " + tekst.delstreng(2, 5));
skriv("del(2, 5): " + tekst.del(2, 5));
skriv("erstatt: " + tekst.erstatt("Verden", "Leap"));
ord = tekst.delOpp(" ");
skriv("delOpp: " + ord);

// Funktionen (NO)
funksjon hils(person) {
    retur "Hei " + person;
}
skriv(hils("Norge"));

funksjon sum(a, b) {
    retur a + b;
}
skriv("sum: " + sum(4, 6));