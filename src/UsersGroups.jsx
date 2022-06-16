import React from "react";

function UsersGroups() {
  const [groups, setGroups] = React.useState({
    kronenburg: [],
    1664: [
      { nom: "BOUARE", prenom: "Assanatou", job: "BO", infos: ["C", "V"] },
      { nom: "DEMPURE", prenom: "Anne", job: "Trib Leader" },
      { nom: "DELPECH", prenom: "Ludovic", job: "BA" },
      { nom: "JOLLET", prenom: "Clément", job: "PSI" },
      { nom: "AIT AMER MEZIANE", prenom: "Khawla", job: "PO" },
      { nom: "ROQUET", prenom: "Manon", job: "PO" },
      { nom: "BARNOT", prenom: "Nicolas", job: "DA" },
      { nom: "PEREZ", prenom: "Théa", job: "UX" },
      { nom: "BENETEAU", prenom: "Nathalie", job: "Dev" },
      { nom: "DIKA", prenom: "Régis", job: "Dev" },
      { nom: "EKPON", prenom: "Komi", job: "Dev" },
      { nom: "KHOULE", prenom: "Ibrahima", job: "Dev" },
      { nom: "BERTHEREAU", prenom: "Jérôme", job: "Concepteur" },
      { nom: "VINCELOT", prenom: "Thomas", job: "Concepteur" },
      { nom: "BOUCARD", prenom: "Eva", job: "CP" },
    ],
    Leffe: [],
    Grimbergen: [
      { nom: "GAUDELOT ", prenom: "David", job: "PO" },
      { nom: "SANTELLI", prenom: "Emmanuel ", job: "PO" },
      { nom: "VIDJRAKOU", prenom: "Edem", job: "DA" },
      { nom: "DUCASTAING", prenom: "Vincent", job: "UX" },
      { nom: "LISKAWA", prenom: "Tiphaine", job: "UX" },
      { nom: "BOURGOIN", prenom: "Julien", job: "Dev" },
      { nom: "MAURI", prenom: "Nicolas", job: "Dev" },
      { nom: "GALES", prenom: "Julien", job: "Dev" },
      { nom: "SALUDO", prenom: "Alexis", job: "Dev" },
      { nom: "BACLE", prenom: "Amélie", job: "Concepteur" },
      { nom: "DUVINAGE", prenom: "Michel", job: "Concepteur" },
      { nom: "CHAUVINEAU", prenom: "Julien", job: "CP" },
      { nom: "NIVAULT", prenom: "Coralie", job: "Encadrement" },
      { nom: "LICHET", prenom: "Mathieu", job: "UI" },
      { nom: "MOREL", prenom: "Martine", job: "UI" },
      { nom: "GUERET", prenom: "Maud", job: "Traffic Manager" },
    ],
    Guinness: [
      { nom: "GOUDEAU PIVETEAU", prenom: "Julia", job: "PO" },
      { nom: "BARROS", prenom: "Francisco", job: "PO" },
      { nom: "DUMAINE", prenom: "Emilie", job: "UX" },
      { nom: "HERBRETEAU", prenom: "Candice", job: "UX" },
      { nom: "CHAVRY", prenom: "Clément", job: "Dev" },
      { nom: "WEBER", prenom: "Pierre", job: "Dev" },
      { nom: "GOYER", prenom: "Guillaume", job: "Dev" },
      { nom: "DADOUCHE", prenom: "Guillaume", job: "Dev" },
      { nom: "BATTAIA", prenom: "Guillaume", job: "Concepteur" },
      { nom: "FORESTIER", prenom: "Maxime", job: "CP" },
      { nom: "LAIGNEAU", prenom: "François", job: "Encadrement" },
      { nom: "THIN", prenom: "Laurine", job: "UI" },
      { nom: "COULARDEAU", prenom: "Arnaud", job: "Traffic Manager" },
      { nom: "COUSTY", prenom: "Julien", job: "Traffic Manager" },
      { nom: "GAUCHER", prenom: "Cyriel", job: "Traffic Manager" },
      { nom: "JAUNAS", prenom: "Victoria", job: "Traffic Manager" },
    ],
    Affligem: [
      { nom: "GUERIN", prenom: "Julien", job: "PO" },
      { nom: "RIZZO", prenom: "Thierry", job: "PO" },
      { nom: "GATEFIN", prenom: "Jérôme", job: "UX" },
      { nom: "VAGNES", prenom: "Christopher", job: "UX" },
      { nom: "CLAVEAU ", prenom: "Maxime", job: "Dev" },
      { nom: "WEMAERE ", prenom: "François", job: "Dev" },
      { nom: "HENIN", prenom: "Johan", job: "Dev" },
      { nom: "NOISSI", prenom: "Abdessattar", job: "Dev" },
      { nom: "BISCARAT", prenom: "Jérôme", job: "Concepteur" },
      { nom: "GANEM", prenom: "Jonathan", job: "CP" },
      { nom: "DROIT", prenom: "Christel", job: "UI" },
      { nom: "LAMBERT", prenom: "Sophie", job: "Traffic Manager" },
      { nom: "DADE", prenom: "Tanguy", job: "Manager" },
      { nom: "GUILLOT", prenom: "Sophie", job: "Manager" },
      { nom: "JENCK", prenom: "Frédéric", job: "Manager" },
      { nom: "DEREZ", prenom: "Julien", job: "Testeur" },
    ],
    Chouffle: [
      { nom: "L'HOSPITALIER", prenom: "Yohann", job: "PO" },
      { nom: "LE BRAS", prenom: "Steven", job: "UX" },
      { nom: "ERTAUD   ", prenom: "Emmanuelle", job: "Dev" },
      { nom: "BENALI", prenom: "Sonia", job: "Dev" },
      { nom: "HERON", prenom: "Joachim", job: "Dev" },
      { nom: "DRAZ", prenom: "Elouan", job: "Dev" },
      { nom: "MALBERT", prenom: "Benoit", job: "Concepteur" },
      { nom: "LAURENT", prenom: "Wafa", job: "CP" },
      { nom: "NAVAS", prenom: "Karina", job: "UI" },
      { nom: "JOUACHIM", prenom: "François", job: "Manager" },
      { nom: "FRUTZZETTI", prenom: "Tessa", job: "Stagiaire" },
      { nom: "LEROY", prenom: "Mathias", job: "Stagiaire" },
      { nom: "GRZESIAK", prenom: "Yann", job: "OPS" },
      { nom: "BOUTALHA", prenom: "Youness", job: "OPS" },
      { nom: "LAMBERTINI", prenom: "Robin", job: "OPS" },
      { nom: "KOUMBA DOUKAGA", prenom: "Yves Régis", job: "Testeur" },
    ],
    Delirium: [
      { nom: "MENARD", prenom: "Alexandra", job: "PO" },
      { nom: "BARBIER", prenom: "Aurélien", job: "UX" },
      { nom: "FREMONT  ", prenom: "Florent", job: "Dev" },
      { nom: "BENGALY", prenom: "Daouda", job: "Dev" },
      { nom: "LEDOUX", prenom: "Audrey", job: "Dev" },
      { nom: "LAMGHARI", prenom: "Ridouan", job: "Dev" },
      { nom: "PIGNON", prenom: "Baptiste", job: "Concepteur" },
      { nom: "MEHDI", prenom: "Houda", job: "CP" },
      { nom: "PASTORINO", prenom: "Ophélia", job: "UI" },
      { nom: "JLASSI", prenom: "Rachid", job: "OPS" },
      { nom: "PRIEUR", prenom: "Vincent", job: "MOE" },
      { nom: "GALLARD", prenom: "Fabien", job: "Inté" },
      { nom: "SCULFORT", prenom: "Henri", job: "Inté" },
      { nom: "LE FRAPPER", prenom: "Nadine", job: "Inté" },
      { nom: "RAIBAUT", prenom: "Fabien", job: "WEB ANALYST" },
      { nom: "LECLERCQ", prenom: "Alexis", job: "Testeur" },
    ],
    Kwak: [{ nom: "MERIGEAU", prenom: "Nicole", job: "PO" }],
    Karmeliet: [
      { nom: "PHILIPPOT", prenom: "Samuel", job: "PO" },
      { nom: "MOTTAIS", prenom: "Marjorie", job: "UX" },
      { nom: "LABRUNE", prenom: "Sébastien", job: "Dev" },
      { nom: "DESMAY", prenom: "Damien", job: "Dev" },
      { nom: "MARTIN", prenom: " Pierre-Olivier", job: "Dev" },
      { nom: "MARMIN", prenom: "Vincent", job: "Dev" },
      { nom: "VANEGUE", prenom: "Célia", job: "Concepteur" },
      { nom: "PITEAU", prenom: "Yoann", job: "CP" },
      { nom: "DALLET", prenom: "Kevin", job: "Testeur" },
      { nom: "RIVIERE", prenom: "Alexandra", job: "Testeur" },
      { nom: "SABOURIN", prenom: "Enzo", job: "Testeur" },
      { nom: "SAHAL", prenom: "Makram", job: "Testeur" },
      { nom: "THUAU", prenom: "Aurélien", job: "Testeur" },
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
