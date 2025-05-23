document.addEventListener('DOMContentLoaded', function () {
  const blogList = document.getElementById('blogs-container'); // Ensure this matches the ID in HTML

  // Function to display blogs
  function displayBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogList.innerHTML = ''; // Clear current content

    blogs.forEach((blog, index) => {
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blog');
      
      const title = document.createElement('h2');
      title.textContent = blog.title;
      blogDiv.appendChild(title);

      const content = document.createElement('p');
      content.textContent = blog.content;
      blogDiv.appendChild(content);

      // Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        sessionStorage.setItem('editIndex', index); // Store index for editing
        window.location.href = 'edit_blogs.html'; // Redirect to edit page
      });
      blogDiv.appendChild(editButton);

      // Delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteBlog(index));
      blogDiv.appendChild(deleteButton);

      blogList.appendChild(blogDiv); // Append blog div to the list
    });
  }

  // Function to delete a blog
  function deleteBlog(index) {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.splice(index, 1); // Remove the selected blog
    localStorage.setItem('blogs', JSON.stringify(blogs)); // Update storage
    displayBlogs(); // Refresh displayed blogs
  }

  // Initial call to display blogs on page load
  displayBlogs();
});
