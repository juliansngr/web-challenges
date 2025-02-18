console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

/* <article class="post">
  <p class="post__content">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <footer class="post__footer">
    <span class="post__username">@username</span>
    <button type="button" class="post__button" data-js="like-button">
      ♥ Like
    </button>
  </footer>
</article>; */

const newPost = document.createElement("article");
newPost.classList.add("post");

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent = "Die Tasse Kaffee, und auch das Glas Wein!";
newPost.append(newPostContent);

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
newPost.append(postFooter);

const spanUsername = document.createElement("span");
spanUsername.classList.add("post__username");
spanUsername.textContent = "@larskrachen";
postFooter.append(spanUsername);

const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.setAttribute("data-js", "new-like-button");
newLikeButton.textContent = "♥ Like";
newLikeButton.addEventListener("click", handleLikeButtonClick);
postFooter.append(newLikeButton);

document.body.append(newPost);
