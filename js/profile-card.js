window.addEventListener("DOMContentLoaded", async function () {
  async function get(url) {
    const resp = await fetch(url);
    return resp.json();
  }

  document.querySelectorAll(".stack-card").forEach(async function (el) {
    const mediumUsername = el.getAttribute("medium-username");

    const response = await fetch(`https://medium.com/@abdelrhmanelmoghazy1?format=json`);
    const text = await response.text();
    const json = JSON.parse(text.replace('])}while(1);</x>', ''));
    const user = json.payload.user;
    const {
        imageId,
        username,
        name,
        bio,
        followersCount
    } = user;

    el.innerHTML = `
        <a href="https://medium.com/@abdelrhmanelmoghazy1" target="_blank" style="text-decoration: none; color: black; display: block; border-radius: 12px; padding: 16px; font-size: 14px; background: linear-gradient(135deg, #ffdd99, #f9bf3f); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <img style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid #fff;" src="https://miro.medium.com/fit/c/60/60/1*ba4i5zvS4jUsTvpbr_v7JA" alt="Profile image"></img>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-size: 18px; font-weight: bold;">Abdelrhman Elmoghazy</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #555;">
                        @abdelrhmanelmoghazy1
                    </p>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #777;">
                       tech-savvy , web dev
                    </p>
                </div>
            </div>
            <div style="margin-top: 16px; text-align: center;">
                <p style="font-size: 12px; color: #666; margin: 0;">FOLLOWERS</p>
                <p style="font-size: 20px; font-weight: bold; color: #222;">33</p>
            </div>
        </a>
        `;
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
