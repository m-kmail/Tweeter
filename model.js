const Tweeter = function()
{
    let posts = [{
        id: 1,
        text: "First post!",
        comments: [
            { id: 1, text: "First comment on first post!" },
            { id: 2, text: "Second comment on first post!!" },
            { id: 3, text: "Third comment on first post!!!" }
        ]
    },
    {
        id: 2,
        text: "Aw man, I wanted to be first",
        comments: [
            { id: 1, text: "Dont wory second poster, youll be first one day." },
            { id: 2, text: "Yeah, believe in yourself!" },
            { id: 3, text: "Haha second place what a joke." }
        ]
    }];

    let postIdCounter = 3;
    let commentIdCounter = 0;

    const getPosts = function(){
        return posts;
    }

    const createPost = function(data){
        let temp={
            id: postIdCounter,
            text:data,
            comments:[]
         }
        postIdCounter++;
        posts.push(temp);
    }

    const deletePost = function(id){

         let pos = 0;
        for(let i in posts)
        {
             if(posts[i].id==id)
            {
                  pos = i;
                 break;
            }
        }
         posts.splice(pos,1);
    }

    const addComment = function(id , text){

        for(let i in posts)
        {
            if(posts[i].id==id)
            { //here the id of the new comment will be 1+ the id if the last one, its not accurate as
             //having a 'static' counter but its better then doing the array size or something cause here
            // at least we are guaranteed to have no duplicated ids.
                posts[i].comments.push({
                id: (posts[i].comments.length==0)? 1 : posts[i].comments[posts[i].comments.length-1].id + 1,
                text:text});
            }
        }
    }

    const deleteComment = function(pid , cid){

        let pos=0;

        for(let i in posts)
        {
            if(posts[i].id==pid)
            {
                for(let j in posts[i].comments)
                {
                    if(posts[i].comments[j].id==cid)
                    {
                          pos = j;
                          break;
                    }
                }
                posts[i].comments.splice(pos,1);
                break;
            }
        }
    }

    return{
        getPosts: getPosts,
        addPost: createPost,
        removePost: deletePost,
        addComment: addComment,
        removeComment: deleteComment
    }

};

