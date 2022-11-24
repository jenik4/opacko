const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const enemyHp = document.getElementById("enemyHp");
const playerHp = document.getElementById("playerHp");
const attack = document.getElementById("attack");
const info = document.getElementById("info");

attack.onmousedown = () => {
  if (playerHp.innerHTML > 0 && enemyHp.innerHTML > 0) {
    enemyHp.innerHTML--;
    player.style.left = "150px";
  }
  if (enemyHp.innerHTML <= 0) {
    info.innerHTML = "Nepřítel zemřel";
  }
}
attack.onmouseup = () => {
  player.style.left = 0;
};
