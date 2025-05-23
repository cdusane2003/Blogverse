<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
  const editForm = document.getElementById('edit-blog-form');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  
  // Retrieve blog index from sessionStorage
  const editIndex = sessionStorage.getItem('editIndex');
  if (editIndex !== null) {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs[editIndex];
    
    // Populate form with existing blog data
    titleInput.value = blog.title;
    contentInput.value = blog.content;
  } else {
    alert('No blog selected for editing.');
    window.location.href = 'view_blog.html';
  }

  // Save changes on form submission
  editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const updatedTitle = titleInput.value;
    const updatedContent = contentInput.value;
    
    if (updatedTitle && updatedContent) {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs[editIndex] = { title: updatedTitle, content: updatedContent };
      
      // Save updated blogs array to LocalStorage
      localStorage.setItem('blogs', JSON.stringify(blogs));
      sessionStorage.removeItem('editIndex'); // Clear edit index from sessionStorage
      window.location.href = 'view_blog.html'; // Redirect back to view blogs
    } else {
      alert('Both fields are required.');
    }
  });
});
=======
document.addEventListener('DOMContentLoaded', function () {
  const editForm = document.getElementById('edit-blog-form');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  
  // Retrieve blog index from sessionStorage
  const editIndex = sessionStorage.getItem('editIndex');
  if (editIndex !== null) {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs[editIndex];
    
    // Populate form with existing blog data
    titleInput.value = blog.title;
    contentInput.value = blog.content;
  } else {
    alert('No blog selected for editing.');
    window.location.href = 'view_blog.html';
  }

  // Save changes on form submission
  editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const updatedTitle = titleInput.value;
    const updatedContent = contentInput.value;
    
    if (updatedTitle && updatedContent) {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs[editIndex] = { title: updatedTitle, content: updatedContent };
      
      // Save updated blogs array to LocalStorage
      localStorage.setItem('blogs', JSON.stringify(blogs));
      sessionStorage.removeItem('editIndex'); // Clear edit index from sessionStorage
      window.location.href = 'view_blog.html'; // Redirect back to view blogs
    } else {
      alert('Both fields are required.');
    }
  });
});
>>>>>>> 04db8ec9889de67bfb83e249a7b155956ea551c3
