import { random } from './utils.js';

const $logs = document.querySelector('#logs');

export const addLog = (text) => $logs.insertAdjacentHTML('afterbegin', `<p>${text}</p>`);

export const generateLog = (firstPerson, secondPerson, count) => {
    const { name: firstName, hp: { current: damageHP, total: defaultHP } } = firstPerson;
    const { name: secondName } = secondPerson;

    const logs = [
        `${firstName} згадав щось важливе, але зненацька ${secondName}, не тямлячи себе від переляку, завдав удару в передпліччя ворога.`,
        `${firstName} поперхнувся, і за це ${secondName} злякано приклав прямий удар коліном у чоло ворога.`,
        `${firstName} забувся, але в цей час нахабний ${secondName}, прийнявши вольове рішення, нечутно підійшовши ззаду, вдарив.`,
        `${firstName} отямився, але зненацька ${secondName} випадково завдав найпотужнішого удару.`,
        `${firstName} поперхнувся, проте в цей час ${secondName} знехотя розтрощив кулаком <вирізано цензурою> суперника.`,
        `${firstName} здивувався, а ${secondName}, похитнувшись, заліпив підступного удару.`,
        `${firstName} висякався, але несподівано ${secondName} провів нищівний удар.`,
        `${firstName} похитнувся, і раптово нахабний ${secondName} безпричинно вдарив у ногу супротивника.`,
        `${firstName} засмутився, як раптом несподівано ${secondName} випадково вліпив ступнею в живіт суперника.`,
        `${firstName} намагався щось сказати, але раптом знічев'я ${secondName} від нудьги розбив брову супернику.`
    ];

    return `${logs[random(logs.length - 1)]} -${count}, [${damageHP}/${defaultHP}]`;
};