
const start = function(){

    let data = $("#in").val();
    $("#in").val("");
    tweeter.addPost(data);
    renderer.renderPosts(tweeter.getPosts());
}

const removePost = function(){

    let temp = $(this).closest("#post").find("#content").text();
    tweeter.removePost(findTheDiv(temp));
    renderer.renderPosts(tweeter. getPosts);
}


const makeComment = function(){

    let id = findTheDiv($(this).closest("div").find("h2").text());
    let txt = $(this).closest("div").find("input").val();
    tweeter.addComment(id , txt);
    renderer.renderPosts(tweeter.getPosts());
}


const removeComment = function(){

    let postId = findTheDiv($(this).closest("#post").find("#content").text());
    let msg = ($(this).closest(".x").find("li").text());

    let commentId = findTheComment(postId,msg);
    tweeter.removeComment(postId , commentId);
    renderer.renderPosts(tweeter.getPosts());
}

const findTheComment = function(psid ,txt){

    let posts = tweeter.getPosts();
    let z;
    for(let i in posts)
    {
        if(posts[i].id==psid)
        {
            for(let j in posts[i].comments)
            {
                if(posts[i].comments[j].text==txt)
                {
                        z =posts[i].comments[j].id;
                        return z;
                }
            }
        }
    }
}

const findTheDiv = function(temp){

    let posts = tweeter.getPosts();
    let id = 0;
    for(let p of posts)
    {
        if(p.text==temp)
        {
            id=p.id;
            break;
        }
    }

    return (id);
}

const tweeter = Tweeter();
const renderer = Renderer();


$("#add").click(start);
$("body").on("click","#delpost",removePost);
$("body").on("click","#addcomment",makeComment);
$("body").on("click","#delcom",removeComment);
