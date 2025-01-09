async function saveProject() {
  const title = document.getElementById('project-title').value;
  const description = document.getElementById('project-description').value;

  const token = 'YOUR_PERSONAL_ACCESS_TOKEN'; // ضع توكن GitHub هنا
  const filePath = '_projects/' + title.replace(/\s+/g, '-').toLowerCase() + '.md';

  const data = `---
  title: ${title}
  description: ${description}
  ---`;

  const response = await fetch(`https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/${filePath}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Add new project',
      content: btoa(data),
    }),
  });

  if (response.ok) {
    alert('Project saved successfully!');
  } else {
    alert('Error saving project');
  }
}