
const DOCKERHUB_URL = "https://hub.docker.com/v2"
const REPOSITORY_CHECK = "repositories/washpost/fusion-engine/tags/?page_size=1000";
function CheckDockerhub() {
  /*

  curl -L --fail "https://hub.docker.com/v2/repositories/washpost/fusion-engine/tags/?page_size=1000" | \
        jq '.results | .[] | .name' -r | \
        sed 's/latest//' | \
        sort --version-sort | \
        tail -n 1

  */

  const checkVersion = () => {
    fetch(DOCKERHUB_URL)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div>
      <p>Update now</p>
      <button onClick={checkVersion}>Check now</button>
    </div>
  )
}

export default CheckDockerhub;