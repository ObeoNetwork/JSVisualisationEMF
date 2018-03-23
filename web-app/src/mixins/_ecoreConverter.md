# ecoreToJsData
@params : fichier ecore
@returns : objet JavaScript
@description : Prends un fichier ecore et le converti en object javascript
Algo: 
  1) on récupère tous les eClassifiers pour obtenir les entités
  2) pour chaque entité on cherche son éventuel parent (eSuperTypes)
  3) et on récupère pour chaque entité ses attributs (eStructuralFeatures) 
  4) a la fin les données sont sauvegardé dans le localStorage
  