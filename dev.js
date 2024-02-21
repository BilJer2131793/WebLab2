function CreationDePublication(){
    let titre = $(".txtTitre").val()
    let auteur = $(".txtAuteur").val()
    let contenu = $(".txtContenu").val()
    
    let d = new Date()
    let date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`


    let data = JSON.stringify({
        Titre: titre,
        Auteur: auteur,
        Date : date,
        Contenu: contenu
    })

    $.post(`http://localhost:3000/Publications`,data, function(){
        console.log("Commentaire ajouter")
    })

}

$("#btnAjouter").click(CreationDePublication)

Clear()

function Clear(){
    $(".txtTitre").val("")
    $(".txtAuteur").val("")
    $(".txtContenu").val("")
}

function test(){
    let contenu = $(".txtAuteur").val()
    console.log(contenu)
}
