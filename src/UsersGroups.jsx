import React from "react";

function UsersGroups() {
  const [groups, setGroups] = React.useState({
    kronenburg: [
      { nom: "COHU", prenom: "Sandra", job: "BO" },
      { nom: "BUZY", prenom: "Maryne", job: "Trib Leader" },
      { nom: "CHATEAUX", prenom: "Nelson", job: "PO" },
      { nom: "SABOURIN", prenom: "Marc", job: "PO", infos: ["C"] },
      { nom: "DAILLANT", prenom: "Audrey", job: "DA" },
      { nom: "DESCOUT", prenom: "Valérie", job: "UX", infos: ["V"] },
      { nom: "HAMON", prenom: "Mallaury", job: "UX", infos: ["V"] },
      { nom: "BERNARDEAU", prenom: "Mathias", job: "Dev", infos: ["C"] },
      { nom: "MBOUGUENG", prenom: "Achille", job: "Dev" },
      { nom: "MERIKHI", prenom: "Issam", job: "Testeur", infos: ["V"] },
      { nom: "FELIX", prenom: "Clément", job: "Dev" },
      { nom: "NIAKOU", prenom: "Lucien", job: "Concepteur" },
      { nom: "ZOUBIR", prenom: "Oussama", job: "Concepteur" },
      { nom: "AOUADNI ", prenom: "Wadhah ", job: "CP", infos: ["C", "V"] },
      { nom: "GANDIT", prenom: "Fabien", job: "CP" },
      { nom: "BRUYANT", prenom: "Virginie", job: "Encadrement" },
    ],
    1664: [
      { nom: "BOUARE", prenom: "Assanatou", job: "BO", infos: ["C", "V"] },
      { nom: "DEMPURE", prenom: "Anne", job: "Trib Leader" },
      { nom: "DELPECH", prenom: "Ludovic", job: "BA" },
      { nom: "JOLLET", prenom: "Clément", job: "PSI" },
      { nom: "DALLET", prenom: "Kevin", job: "Testeur" },
      { nom: "ROQUET", prenom: "Manon", job: "PO" },
      { nom: "BARNOT", prenom: "Nicolas", job: "DA", infos: ["C"] },
      { nom: "BARON", prenom: "Goulven", job: "UX", infos: ["V"] },
      { nom: "PEREZ", prenom: "Théa", job: "UX", infos: ["V"] },
      { nom: "BENETEAU", prenom: "Nathalie", job: "Dev" },
      { nom: "DIKA", prenom: "Régis", job: "Dev" },
      { nom: "EKPON", prenom: "Komi", job: "Dev" },
      { nom: "KHOULE", prenom: "Ibrahima", job: "Dev", infos: ["V"] },
      { nom: "BERTHEREAU", prenom: "Jérôme", job: "Concepteur" },
      { nom: "VINCELOT", prenom: "Thomas", job: "Concepteur" },
      { nom: "BOUCARD", prenom: "Eva", job: "CP" },
    ],
    Leffe: [
      { nom: "DESIDERI", prenom: "Sandrine", job: "PO" },
      { nom: "SAMPAIO DE JESUS", prenom: "Laetitia", job: "PO" },
      { nom: "SAINVET", prenom: "Jonathan", job: "DA", infos: ["C"] },
      { nom: "DREILLARD", prenom: "Audrey", job: "UX", infos: ["C"] },
      { nom: "DABIN", prenom: "Sarah", job: "UX", infos: ["C"] },
      { nom: "BEROUAIN", prenom: "Naoufal", job: "Dev", infos: ["V"] },
      { nom: "MAIN", prenom: "Antoine", job: "Dev" },
      { nom: "BLANCHARD ", prenom: "Ludivine", job: "Testeur" },
      { nom: "PICHON", prenom: "Nicolas", job: "Dev" },
      { nom: "PAILLARD", prenom: "Thibaud", job: "Concepteur" },
      { nom: "CHTIOUI", prenom: "Sami", job: "Concepteur", infos: ["C"] },
      { nom: "CARBONELL", prenom: "Jérôme", job: "CP", infos: ["C"] },
      { nom: "BOURREL", prenom: "Estelle", job: "Encadrement" },
      { nom: "HALBAUT", prenom: "Liliane", job: "Encadrement" },
      { nom: "CEDAT", prenom: "Pascal", job: "UI" },
      { nom: "MIDI", prenom: "Edwige", job: "UI", infos: ["C"] },
    ],
    Grimbergen: [
      { nom: "GAUDELOT ", prenom: "David", job: "PO" },
      { nom: "SANTELLI", prenom: "Emmanuel ", job: "PO" },
      { nom: "VIDJRAKOU", prenom: "Edem", job: "DA" },
      { nom: "DUCASTAING", prenom: "Vincent", job: "UX" },
      { nom: "LISKAWA", prenom: "Tiphaine", job: "UX" },
      { nom: "BOURGOIN", prenom: "Julien", job: "Dev" },
      { nom: "SABOURIN", prenom: "Enzo", job: "Testeur" },
      { nom: "GALES", prenom: "Julien", job: "Dev" },
      { nom: "SALUDO", prenom: "Alexis", job: "Dev" },
      { nom: "BACLE", prenom: "Amélie", job: "Concepteur", infos: ["V"] },
      { nom: "DUVINAGE", prenom: "Michel", job: "Concepteur" },
      { nom: "CHAUVINEAU", prenom: "Julien", job: "CP" },
      { nom: "NIVAULT", prenom: "Coralie", job: "Encadrement" },
      { nom: "LICHET", prenom: "Mathieu", job: "UI" },
      { nom: "MOREL", prenom: "Martine", job: "UI" },
      { nom: "GUERET", prenom: "Maud", job: "Traffic Manager", infos: ["V"] },
    ],
    Guinness: [
      { nom: "GOUDEAU PIVETEAU", prenom: "Julia", job: "PO" },
      { nom: "BARROS", prenom: "Francisco", job: "PO" },
      { nom: "SAHAL", prenom: "Makram", job: "Testeur" },
      { nom: "HERBRETEAU", prenom: "Candice", job: "UX" },
      { nom: "CHAVRY", prenom: "Clément", job: "Dev" },
      { nom: "WEBER", prenom: "Pierre", job: "Dev" },
      { nom: "GOYER", prenom: "Guillaume", job: "Dev", infos: ["C"] },
      { nom: "DADOUCHE", prenom: "Guillaume", job: "Dev" },
      { nom: "BATTAIA", prenom: "Guillaume", job: "Concepteur", infos: ["C"] },
      { nom: "FORESTIER", prenom: "Maxime", job: "CP" },
      { nom: "LAIGNEAU", prenom: "François", job: "Encadrement" },
      { nom: "THIN", prenom: "Laurine", job: "UI" },
      {
        nom: "COULARDEAU",
        prenom: "Arnaud",
        job: "Traffic Manager",
        infos: ["C"],
      },
      { nom: "JENCK", prenom: "Frédéric", job: "Manager" },
      { nom: "LE FRAPPER", prenom: "Nadine", job: "Inté" },
    ],
    Affligem: [
      { nom: "GUERIN", prenom: "Julien", job: "PO" },
      { nom: "RIZZO", prenom: "Thierry", job: "PO", infos: ["V"] },
      { nom: "GATEFIN", prenom: "Jérôme", job: "UX" },
      { nom: "VAGNES", prenom: "Christopher", job: "UX" },
      { nom: "CLAVEAU ", prenom: "Maxime", job: "Dev", infos: ["C"] },
      { nom: "WEMAERE ", prenom: "François", job: "Dev" },
      { nom: "HENIN", prenom: "Johan", job: "Dev" },
      { nom: "NOISSI", prenom: "Abdessattar", job: "Dev" },
      { nom: "BISCARAT", prenom: "Jérôme", job: "Concepteur" },
      { nom: "GANEM", prenom: "Jonathan", job: "CP", infos: ["C"] },
      { nom: "DROIT", prenom: "Christel", job: "UI", infos: ["V"] },
      { nom: "LAMBERT", prenom: "Sophie", job: "Traffic Manager" },
      { nom: "DADE", prenom: "Tanguy", job: "Manager" },
      { nom: "BOUTALHA", prenom: "Youness", job: "OPS", infos: ["V"] },
      { nom: "DEREZ", prenom: "Julien", job: "Testeur" },
      { nom: "COUSTY", prenom: "Julien", job: "Traffic Manager", infos: ["C"] },
    ],
    Chouffle: [
      { nom: "L'HOSPITALIER", prenom: "Yohann", job: "PO" },
      { nom: "LE BRAS", prenom: "Steven", job: "UX" },
      { nom: "ERTAUD   ", prenom: "Emmanuelle", job: "Dev", infos: ["C", "V"] },
      { nom: "BENALI", prenom: "Sonia", job: "Dev", infos: ["C"] },
      { nom: "HERON", prenom: "Joachim", job: "Dev" },
      { nom: "DRAZ", prenom: "Elouan", job: "Dev" },
      { nom: "MALBERT", prenom: "Benoit", job: "Concepteur" },
      { nom: "LAURENT", prenom: "Wafa", job: "CP", infos: ["V"] },
      { nom: "NAVAS", prenom: "Karina", job: "UI", infos: ["V"] },
      { nom: "JOUACHIM", prenom: "François", job: "Manager" },
      { nom: "FRUTZZETTI", prenom: "Tessa", job: "Stagiaire" },
      { nom: "LEROY", prenom: "Mathias", job: "Stagiaire" },
      { nom: "AMARA", prenom: "Chaima", job: "Testeur", infos: ["V"] },
      { nom: "GUILLOT", prenom: "Sophie", job: "Manager" },
      { nom: "LAMBERTINI", prenom: "Robin", job: "OPS" },
      { nom: "KOUMBA DOUKAGA", prenom: "Yves Régis", job: "Testeur" },
    ],
    Delirium: [
      { nom: "MENARD", prenom: "Alexandra", job: "PO", infos: ["C"] },
      { nom: "BARBIER", prenom: "Aurélien", job: "UX", infos: ["V"] },
      { nom: "FREMONT  ", prenom: "Florent", job: "Dev", infos: ["V"] },
      { nom: "BENGALY", prenom: "Daouda", job: "Dev" },
      { nom: "LEDOUX", prenom: "Audrey", job: "Dev" },
      { nom: "LAMGHARI", prenom: "Ridouan", job: "Dev", infos: ["V"] },
      { nom: "PIGNON", prenom: "Baptiste", job: "Concepteur" },
      { nom: "MEHDI", prenom: "Houda", job: "CP", infos: ["V"] },
      { nom: "PASTORINO", prenom: "Ophélia", job: "UI" },
      { nom: "JLASSI", prenom: "Rachid", job: "OPS", infos: ["V"] },
      { nom: "PRIEUR", prenom: "Vincent", job: "MOE", infos: ["C"] },
      { nom: "GALLARD", prenom: "Fabien", job: "Inté" },
      { nom: "SCULFORT", prenom: "Henri", job: "Inté", infos: ["C"] },
      { nom: "GAUCHER", prenom: "Cyriel", job: "Traffic Manager" },
      { nom: "RAIBAUT", prenom: "Fabien", job: "WEB ANALYST" },
      { nom: "LECLERCQ", prenom: "Alexis", job: "Testeur" },
    ],
    Kwak: [
      { nom: "MERIGEAU", prenom: "Nicole", job: "PO", infos: ["C"] },
      { nom: "GRANDET", prenom: "Flora", job: "UX" },
      { nom: "KACHROUDI ", prenom: "Nedra", job: "Dev", infos: ["C", "V"] },
      { nom: "COSSARD", prenom: "Emmanuel", job: "Dev" },
      { nom: "MAKAYA", prenom: "Jean-Baptiste", job: "Dev" },
      { nom: "DEGUIL", prenom: "Johan", job: "Dev" },
      { nom: "RIVAULT", prenom: "Damien", job: "Concepteur" },
      { nom: "MEZINE", prenom: "Ghenima", job: "CP", infos: ["V"] },
      { nom: "REAULT", prenom: "Yohann", job: "UI" },
      { nom: "VILLEGAS", prenom: "Sébastien", job: "Pilote" },
      { nom: "FENRIS SEGUIN", prenom: "Alexandre", job: "Pilote" },
      { nom: "ALLAI", prenom: "Abdelkarim", job: "Testeur" },
      { nom: "GRZESIAK", prenom: "Yann", job: "OPS" },
      { nom: "FOUCHE", prenom: "Carole", job: "Dev", infos: ["C"] },
      { nom: "CLAIR", prenom: "Maud", job: "Testeur", infos: ["V"] },
      { nom: "EL AKROUTI", prenom: "Zineb", job: "Dev", infos: ["V"] },
    ],
    Karmeliet: [
      { nom: "PHILIPPOT", prenom: "Samuel", job: "PO" },
      { nom: "MOTTAIS", prenom: "Marjorie", job: "UX", infos: ["C"] },
      { nom: "LABRUNE", prenom: "Sébastien", job: "Dev" },
      { nom: "DESMAY", prenom: "Damien", job: "Dev" },
      { nom: "MARTIN", prenom: " Pierre-Olivier", job: "Dev" },
      { nom: "MARMIN", prenom: "Vincent", job: "Dev" },
      { nom: "VANEGUE", prenom: "Célia", job: "Concepteur", infos: ["V"] },
      { nom: "PITEAU", prenom: "Yoann", job: "CP" },
      { nom: "AIT AMER MEZIANE", prenom: "Khawla", job: "PO", infos: ["C"] },
      { nom: "RIVIERE", prenom: "Alexandra", job: "Testeur", infos: ["C"] },
      { nom: "MAURI", prenom: "Nicolas", job: "Dev" },
      { nom: "DUMAINE", prenom: "Emilie", job: "UX", infos: ["C"] },
      { nom: "THUAU", prenom: "Aurélien", job: "Testeur" },
      { nom: "JANTON", prenom: "Christophe", job: "Dev", infos: ["C"] },
      { nom: "EDENGUELE", prenom: "Yves", job: "Dev", infos: ["C"] },
      { nom: "JAUNAS", prenom: "Victoria", job: "Traffic Manager" },
    ],
  });

  return (
    <div className="grid grid-cols-5 mx-2 py-3">
      {Object.keys(groups)
        .sort(function (a, b) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        })
        .map((beer) => (
          <div
            className="bg-slate-300 mx-2 my-1 font-light text-sm text-slate-800 rounded-md"
            key={beer}
          >
            <h3 className="bg-blue-600 text-center px-2 py-1 rounded-t-md text-white font-extralight flex items-end justify-between">
              <span>{beer}</span>
              <span className="bg-slate-300 rounded-full mx-1 px-2 font-light text-xs text-slate-800">
                <span>{groups[beer].length}</span>
              </span>
            </h3>
            {groups[beer].map((user) => (
              <p
                className="px-3 py-1 text-xs flex justify-between items-center"
                key={user.id}
              >
                <p>
                  <span className="mr-1 uppercase">[{user.job}]</span>
                  <span className="mr-1">{user.prenom}</span>
                  <span className="mr-1">{user.nom}</span>
                </p>
                <p>
                  {user.infos &&
                    user.infos.map((info, key) => (
                      <span
                        className={`${info === "V" && "bg-pink-900"} ${
                          info === "C" && "bg-green-900"
                        } rounded-full mx-1 px-2 font-light text-xs text-white`}
                      >
                        {info}
                      </span>
                    ))}
                </p>
              </p>
            ))}
          </div>
        ))}
    </div>
  );
}

export default UsersGroups;
