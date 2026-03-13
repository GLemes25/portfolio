export async function getRepos() {
  const res = await fetch("https://api.github.com/users/SEU_USER/repos", {
    next: { revalidate: 3600 },
  });

  return res.json();
}
