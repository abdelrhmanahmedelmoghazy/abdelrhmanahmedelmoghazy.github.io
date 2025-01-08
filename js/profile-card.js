window.addEventListener("DOMContentLoaded", async function () {
  async function get(url) {
    const resp = await fetch(url);
    return resp.json();
  }

  document.querySelectorAll(".stack-card").forEach(async function (el) {
    const devUsername = el.getAttribute("dev-username");

    try {
        const response = await fetch(`https://dev.to/api/users/by_username?url=abdelrahman_elmoghaz`);
        const user = await response.json();
        const { profile_image, username, name, summary, public_reactions_count } = user;

        el.innerHTML = `
            <a href="https://dev.to/abdelrahman_elmoghaz" target="_blank" style="text-decoration: none; color: black; display: block; border-radius: 12px; padding: 16px; font-size: 14px; background: linear-gradient(135deg, #ffdd99, #f9bf3f); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <img style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid #fff;" src="https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2677683%2F60ffc7ae-490b-4c84-b890-4966d66efae0.png" alt="Profile image"></img>
                    <div style="flex-grow: 1;">
                        <h3 style="margin: 0; font-size: 18px; font-weight: bold;">Abdelrhman Elmoghazy</h3>
                        <p style="margin: 4px 0 0; font-size: 12px; color: #555;">@abdelrahman_elmoghaz</p>
                        <p style="margin: 4px 0 0; font-size: 12px; color: #777;">full-stack dev
freelancer</p>
                    </div>
                </div>
                <div style="margin-top: 16px; text-align: center;">
                    <p style="font-size: 12px; color: #666; margin: 0;">REACTIONS</p>
                    <p style="font-size: 20px; font-weight: bold; color: #222;">204</p>
                </div>
            </a>
        `;
    } catch (error) {
        console.error("Error fetching Dev.to data:", error);
    }
});



  document.querySelectorAll(".github-card").forEach(async function (el) {
    const username = el.getAttribute("Abdelrhman Elmoghazy");

    const response = await get(`https://api.github.com/users/abdelrhmanahmedelmoghazy`);
    const { name, avatar_url, public_repos, followers, html_url, following } =
      response;

    el.innerHTML = `
        <a href="https://github.com/abdelrhmanahmedelmoghazy" target="_blank" style="text-decoration: none; color: black; display: block; border-radius: 12px; padding: 16px; font-size: 14px; background: linear-gradient(135deg, #ffdd99, #f9bf3f); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <img style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid #fff;" src="https://avatars.githubusercontent.com/u/193830761?v=4" alt="Profile image"></img>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-size: 18px; font-weight: bold;">Abdelrhman Elmoghazy</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #555;">
                        @github.com/abdelrhmanahmedelmoghazy
                    </p>
                </div>
            </div>
            <div style="margin-top: 16px; display: flex; justify-content: space-between; text-align: center;">
                <div>
                    <p style="font-size: 12px; color: #666; margin: 0;">REPOSITORIES</p>
                    <p style="font-size: 20px; font-weight: bold; color: #222;">2</p>
                </div>
                <div>
                    <p style="font-size: 12px; color: #666; margin: 0;">FOLLOWERS</p>
                    <p style="font-size: 20px; font-weight: bold; color: #222;">10</p>
                </div>
                <div>
                    <p style="font-size: 12px; color: #666; margin: 0;">FOLLOWING</p>
                    <p style="font-size: 20px; font-weight: bold; color: #222;">15</p>
                </div>
            </div>
        </a>
        `;
  });
});
