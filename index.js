const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const heartLogo = "images/icon-heart.png";
const commentLogo = "images/icon-comment.png";
const dmLogo = "images/icon-dm.png";

const main = document.querySelector("main");

for (let i = 0; i < posts.length; i++) {
  main.innerHTML += `
    <section>
        <div class="post-header">
            <img class="avatar" src="${posts[i].avatar}">
            <div>
                <p class="name">${posts[i].name}</p>
                <p class="location">${posts[i].location}
            </div>
        </div> 
        <img class="selfie" src="${posts[i].post}" />
        <div class="buttons">
            <img id="heart" src="${heartLogo}" />
            <img src="${commentLogo}" />
            <img src="${dmLogo}" />
        </div>
        <div class="content">
            <p class="likes">${posts[i].likes}</p>
            <p class="message"><span id="username">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </section>
`;
}
