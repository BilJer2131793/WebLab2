function GetArticleID(){
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    return id

}
async function GenerateContent(articleId){
    let publication =await fetch(`http://localhost:3000/Publications?ID=${articleId}`)
    .then(response => response.json())
    .then(json => {return json[0];})

    $(".titre").text(publication.Titre)

    let content = `<p>${publication.Contenu}</p>`
    $(".contenu").append(content)


}
async function GetComments(articleId){
    let publication =await fetch(`http://localhost:3000/Commentaires?Article=${articleId}`)
    .then(response => response.json())
    .then(json => json.forEach(comment => {
        CreateComment(comment)
    }))

}
function CreateComment(comment){
    
    let newComment = `
    <div class="commentaire d-flex border border-2 rounded-3 m-2 p-2">
        <img class="img-fluid imgCommentaire mx-2"src="images/trudeau.jpg" alt="">
        <p>${comment.Contenu}</p>
    </div>`

    $(".Commentaires").append(newComment)
}
function GeneratePage(){
    let id = GetArticleID()
    GenerateContent(id)
    GetComments(id)
}

GeneratePage()
$("#btnAjouter").click(CreateNewComment)


function test(){

    console.log(contenu)
}


function CreateNewComment(){

    let urlParams = new URLSearchParams(window.location.search);
    let articleId = urlParams.get('id');

    let d = new Date()
    let date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`

    let contenu = $("#txtCommentaire").val()

    let data = JSON.stringify({
        Article: articleId,
        Date: date,
        Contenu: contenu
    })

    $.post(`http://localhost:3000/Commentaires`,data, function(){
        console.log("Commentaire ajouter")
    })

}



