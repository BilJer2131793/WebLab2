function CreatePublication(publication){
    $(document).ready(function(){
        let articleContent = `
        <article class="rounded-4 p-3">
            <img class="mx-auto d-block img-fluid pb-2" src="https://picsum.photos/id/237/200" alt="">
            <a class="text-decoration-none" style="color: #00ADB5" href="blog.html?id=${publication.id}"><h5 class="text-center bg-secondary">${publication.Titre}</h5></a>
            <P class="m-3">${publication.Contenu}</P>
        </article>`;
    
        $(".blog").append(articleContent)
    });
}
function GetPublications(){
    fetch("http://localhost:3000/Publications")
    .then(response => response.json())
    .then(json => json.reverse().forEach(publication => {
            CreatePublication(publication)
        }))
}
GetPublications()




