const respositories = document.querySelector('.projects');

function getApiGitHub(){
    fetch('https://api.github.com/users/pomboexe/repos')
        .then(async res =>{
            if(!res.ok){
                throw new Error(res.status);
            }

            let data = await res.json();
            data.map(item => {
                let project = document.createElement('div');

                project.innerHTML =`
                    <div class="project-card">
                        <div class="title">
                            <img src="assets/folder.svg" alt=""> <h3>${item.name}</h3>
                        </div>
                        <p>${item.description}</p>
                        <div class="title">
                            <img src="assets/star.svg" alt=""> <b>${item.stargazers_count}</b>
                            <img src="assets/git-branch.svg" alt=""> <b>${item.forks_count}</b> 
                            <div class="lang"><div class="circle"></div> <b>${item.language}</b></div>
                        </div>
                    </div>
                `
                respositories.appendChild(project);
            })
        })
}
getApiGitHub()