function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                showUserBadge(data);
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
        });
}

function showUserBadge(userData) {
    const form = document.getElementById('login-form');
    const card = document.getElementById('card');
    const userDetails = document.getElementById('user-details');
    form.style.display = 'none';
    card.style.display = 'block';

    userDetails.innerHTML = `
        <div class="card">
            <div class="card__title">
                IDENTIFICATION CARD
            </div>
            <div class="card__body">
                <div class="card__image">
                    <img src="${userData.image}" alt="">
                </div>
                <div class="card__user_data">
                    <div class="card__user_data__row">
                        ID: ${userData.id}
                    </div>
                    <div class="card__user_data__row">
                        Name:  ${userData.username}
                    </div>
                    <div class="card__user_data__row">
                        Gender: ${userData.gender}
                    </div>
                    <div class="card__user_data__row">
                        Email: ${userData.email}
                    </div>
                </div>
            </div>
        </div>
    `;


    userDetails.style.display = 'flex';
    userDetails.style.flexDirection = 'column';
    userDetails.style.alignItems = 'center';
    userDetails.style.marginTop = '10px';
}

function voltarParaTelaDeLogin() {
    const form = document.getElementById('login-form');
    const card = document.getElementById('card');
    form.style.display = 'block';
    card.style.display = 'none';
}


//atuny0","password":"9uQFF1Lh
//hbingley1","password":"CQutx25i8r
//"yraigatt3","password":"sRQxjPfdS
//"kmeus4","password":"aUTdmmmbH