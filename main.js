import Pokemon from './pokemon.js';
import { pokemons } from './pokemons.js';
import { random, countBtn } from './utils.js';
import { addLog, generateLog } from './logs.js';

const $control = document.querySelector('.control');

const shuffledPokemons = [...pokemons].sort(() => 0.5 - Math.random());

const player1 = new Pokemon({
    ...shuffledPokemons[0],
    selectors: 'character',
});

const player2 = new Pokemon({
    ...shuffledPokemons[1],
    selectors: 'enemy',
});

const player3 = new Pokemon({
    ...shuffledPokemons[2],
    selectors: 'enemy2',
});

const gameAttacks = [
    ...player1.attacks,
    ...player2.attacks.slice(0, 2)
];

gameAttacks.forEach(attack => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = attack.name;

    const btnCount = countBtn(attack.maxCount, $btn);

    $btn.addEventListener('click', () => {
        btnCount();

        const charDmg = random(attack.maxDamage, attack.minDamage);

        const enemy1Attack = player2.attacks[0];
        const enemy2Attack = player3.attacks[0];

        const enemy1Dmg = random(enemy1Attack.maxDamage, enemy1Attack.minDamage);
        const enemy2Dmg = random(enemy2Attack.maxDamage, enemy2Attack.minDamage);

        player1.changeHP(charDmg, (count) => {
            addLog(generateLog(player1, player2, count));
        });

        player2.changeHP(enemy1Dmg, (count) => {
            addLog(generateLog(player2, player1, count));
        });

        player3.changeHP(enemy2Dmg, (count) => {
            addLog(generateLog(player3, player1, count));
        });

        if (player1.hp.current === 0) {
            const allButtons = document.querySelectorAll('.control .button');
            allButtons.forEach($button => $button.disabled = true);
        }
    });

    $control.appendChild($btn);
});