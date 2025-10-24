function postBlog() {
  const input = document.getElementById("blogInput");
  const container = document.getElementById("blogContainer");

  if (!input || !container) return;

  if (input.value.trim() === "") {
    alert("Please write something before posting!");
    return;
  }

  const post = document.createElement("div");
  post.classList.add("blog-post");
  post.textContent = input.value;
  container.prepend(post);

  input.value = "";
}