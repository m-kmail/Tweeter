const Renderer = function(){

    const src = $("#my-temp").html();
    const template=Handlebars.compile(src);

    const renderPosts = function(posts){

        $("#posts").empty();
        let newhtml=template({post:posts});
        $("#posts").append(newhtml);
    }

    return{
        renderPosts:renderPosts
    }
}