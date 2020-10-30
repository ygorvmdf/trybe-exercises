const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

it('should check if the given repository names are in the repository list', async (done) => {
    const repositoryName = await getRepos('https://api.github.com/users/tryber/repos');
    const expected1 = repositoryName.find(element => element === 'sd-01-week4-5-project-todo-list');
    const expected2 = repositoryName.find(element => element === 'sd-01-week4-5-project-meme-generator');
    expect(expected1).not.toBe('sd-01-week4-5-project-todo-list');
    expect(expected2).not.toBe('sd-01-week4-5-project-meme-generator');
    done();
})
