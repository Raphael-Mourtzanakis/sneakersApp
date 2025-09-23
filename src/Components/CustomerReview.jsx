import '../styles/CustomerReview.css';

function CustomerReview ({scaleValue, reviewType}) {
    const range = [1, 2, 3, 4, 5]
    const scaleType = reviewType === "confort" ? "😌": "💖" // Si reviewType est confort alors le définir à "😌", sinon à "💖"

    return (
        <div>
            <span>{reviewType} : </span> {/* Affiche "esthétisme :" ou "confort :" */}
            <div style={{display: "inline"}}> {/* Afficher en ligne */}
                {range.map((rangeElem) => // Boucle dans la la liste range avec rangeElem comme variable pour la valeur de chaque index
                    scaleValue >= rangeElem ? ( // Si le nombre de ligne actuel est inférieur ou égal à la valeur d'esthétisme ou de confort
                        <span key={rangeElem.toString()}>{scaleType}</span> // Insérer l'émoji 
                    ) : null // Sinon, ne rien insérer
                )}
            </div>
        </div>
    )
}

/* 
    ? = alors
    : = sinon
    LISTE.map(LIGNE => ) :  Boucle de valeurs de LISTE avec LIGNE pour la valeur de chaque index 
    => = Exécuter la boucle
    VARIABLE.toString() = VARIABLE mais au type String
*/

export default CustomerReview;