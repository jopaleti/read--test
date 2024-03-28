import { getGoogleOauthUrl } from "./getGoogleUrl"

function Google() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-white">
      <h1 className="mb-4">Google Authentication</h1>
      <a href={getGoogleOauthUrl()}>Login With Google</a>
      </div>
  )
}

export default Google