function getGoogleOauthUrl() {
    const rootUrl: string = "https://accounts.google.com/o/oauth2/v2/auth";

    const options = {
      redirect_uri: "http://localhost:3000/api/v1/user/google/oauth",
      client_id:
        "836791614935-dj4j5o7r90tolbaic7vfu28oudk74v3u.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scopes: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email	",
      ].join(""),
    };
    console.log(options)
    const qs = new URLSearchParams(options)
    console.log(qs)

    return `${rootUrl}?${qs.toString()}`;

}

export { getGoogleOauthUrl }