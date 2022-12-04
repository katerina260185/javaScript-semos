
function savePost(post) {
//request body - tuka gi stavame podatocite koi sakame da gi zacuvame na serverska strana
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // http method
    body: JSON.stringify(post)
})
}


savePost({
    userId:1,
    title: "My first post",
    body: "I am learning more about http requests"
})
 


 function deletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE", // http method
        
    })
    }
   
    async function getPosts(){
       const response = await fetch ("https://jsonplaceholder.typicode.com/posts") 
       const posts = await response.json()
       localStorage.setItem("posts", JSON.stringify(posts))
    }

    getPosts()