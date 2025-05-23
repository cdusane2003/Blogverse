document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("add-blog-form")) {
    const form = document.getElementById("add-blog-form");
    form.addEventListener("submit", addBlog);
  }

  if (document.getElementById("blogs-container")) {
    displayBlogs();
  }
});

function addBlog(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  
  if (!title || !content) {
    alert("Please fill in both title and content.");
    return;
  }

  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

  blogs.push({ title, content });
  localStorage.setItem("blogs", JSON.stringify(blogs));

  window.location.href = "view_blog.html";
}

function displayBlogs() {
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const container = document.getElementById("blogs-container");

  if (blogs.length === 0) {
    container.innerHTML = "<p>No blogs available. Please add a blog.</p>";
  } else {
    container.innerHTML = "";
    blogs.forEach((blog, index) => {
      const blogElement = document.createElement("div");
      blogElement.classList.add("blog");
      blogElement.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>
        <button onclick="editBlog(${index})">Edit Blog</button>
        <button onclick="deleteBlog(${index})">Delete Blog</button>
      `;
      container.appendChild(blogElement);
    });
  }
}

function editBlog(index) {
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    let blog = blogs[index];
    localStorage.setItem("editBlogIndex", index);
    localStorage.setItem("editBlogTitle", blog.title);
    localStorage.setItem("editBlogContent", blog.content);
    window.location.href = "edit_blogs.html";
}

document.getElementById("editBlogForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let index = localStorage.getItem("editBlogIndex");
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    blogs[index] = {
        title: document.getElementById("editTitle").value,
        content: document.getElementById("editContent").value,
    };
    localStorage.setItem("blogs", JSON.stringify(blogs));
    alert("Blog updated successfully!");
    window.location.href = "view_blog.html";
});

window.onload = function() {
    if (document.getElementById("editBlogForm")) {
        document.getElementById("editTitle").value = localStorage.getItem("editBlogTitle");
        document.getElementById("editContent").value = localStorage.getItem("editBlogContent");
    }
};

function deleteBlog(index) {
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  blogs.splice(index, 1);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  displayBlogs();
}
