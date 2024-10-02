function fetchProfile() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a username");
    return;
  }
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response is not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayProfile(data);
    })
    .catch((err) => {
      console.error("there was a problem with the fetch operation: ", err);
    });
}

function displayProfile(profileData) {
  const profile = document.getElementById("profile");
  profile.innerHTML = `
        <h2>${profileData.login}</h2>
        <img src = "${profileData.avatar_url}" style="width: 200px; height: 200px; border-radius: 50%;"/>`;
}
