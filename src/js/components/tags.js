// Classe permettant d'afficher une liste des tags définis par le paramètre "tags" dans le conteneur avec l'id défini par le paramètre "parentId"
export default class Tags {
    constructor(tags, parentId) {
        this.tags = tags;
        this.parentId = parentId;
    }

    render() {
        // Récupération de l'élément parent dans lequel on va insérer de nouveaux éléments html paramétrés dans le json
        const parentElement = document.getElementById(this.parentId);

        // Parcours des éléments issus du json
        this.tags.forEach((tag) => {
            // Ajout du nouvel élément dans le DOM
            parentElement.appendChild(this.createTag(tag));
        });
    }

    createTag(tag) {
        // Création du nouvel élément html
        const span = document.createElement("span");

        // Mise à jour des attributs (class, aria-*, ...)
        span.setAttribute("class", "tag");
        span.setAttribute("aria-label", "Tag " + tag);

        // Mise à jour du innerHtml
        span.innerHTML = "#" + tag;

        return span;
    }
}