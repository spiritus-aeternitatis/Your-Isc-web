const users = {
  'n@zid': { password: '8c1', display: 'Nazid' },
  '@ngel': { password: 'candy4u', display: 'Angel' },
  'ye@sin': { password: 'ideal25', display: 'Yeasin Sir' },
  'soh@na': { password: 'iscianb29', display: 'Sohana' },
  'medh@': { password: 'iscianb30', display: 'Medha' },
  'zil@ni': { password: 'ideal25', display: 'Zilani Sir'},
  '@driza': { password: 'iscb30', display: 'Adriza'},
  'fest-@cc': { password: 'IAIT.innovatia', display: 'I.A.I.T.'},
  '$iddique': { password: 'ideal25', display: "Hon'ble Headsir"},
  'user-isc': {passeord: 'fr.iscian', display: 'ISCian' }
};

window.onload = () => {
  const savedUser = localStorage.getItem("rememberedUser");
  const savedPass = localStorage.getItem("rememberedPass");

  if (savedUser && savedPass) {
    document.getElementById("userID").value = savedUser;
    document.getElementById("password").value = savedPass;
  }
};

function login() {
  const userInput = document.getElementById("userID").value.trim().toLowerCase();
  const passInput = document.getElementById("password").value.trim();

  if (!(userInput in users)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid User ID!',
      footer: '<b>Please try again</b>'
    });
    return;
  }

  if (users[userInput].password !== passInput) {
    Swal.fire({
      icon: 'error',
      title: 'Wrong Password!',
      text: 'Your password does not match.',
      footer: '<b>Try again carefully</b>'
    });
    return;
  }

  const displayName = users[userInput].display;

  Swal.fire({
    icon: 'success',
    title: 'Welcome to Your ISC!',
    text: `Hello, ${displayName}`,
    showConfirmButton: false,
    timer: 2000
  });

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 2000);
}

// Remember buttons
document.querySelector('.yes').addEventListener('click', () => {
  const user = document.getElementById("userID").value.trim();
  const pass = document.getElementById("password").value.trim();
  localStorage.setItem("rememberedUser", user);
  localStorage.setItem("rememberedPass", pass);

  Swal.fire({
    icon: 'success',
    title: 'Login Info Saved',
    text: 'Your login will be remembered!',
    timer: 1500,
    showConfirmButton: false
  });
});

document.querySelector('.no').addEventListener('click', () => {
  localStorage.removeItem("rememberedUser");
  localStorage.removeItem("rememberedPass");

  Swal.fire({
    icon: 'info',
    title: 'Login Info Removed',
    text: 'Your login will not be remembered.',
    timer: 1500,
    showConfirmButton: false
  });
});
