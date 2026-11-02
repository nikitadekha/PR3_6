class Selectors {
    constructor(selectors) {
        this.elHP = document.getElementById(`health-${selectors}`);
        this.elProgressbar = document.getElementById(`progressbar-${selectors}`);
        this.elImg = document.getElementById(`img-${selectors}`);
        this.elName = document.getElementById(`name-${selectors}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors, attacks = [], img }) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;
        this.img = img;

        if (this.elImg && img) this.elImg.src = img;
        if (this.elName) this.elName.innerText = name;

        this.renderHP();
    }

    renderHPLife = () => {
        const { elHP, hp: { current, total } } = this;
        elHP.innerText = `${current} / ${total}`;
    };

    renderProgressbarHP = () => {
        const { elProgressbar, hp: { current, total } } = this;
        const procent = (current / total) * 100;

        elProgressbar.style.width = `${procent}%`;

        elProgressbar.classList.remove('low', 'critical');
        if (procent < 60 && procent >= 20) {
            elProgressbar.classList.add('low');
        } else if (procent < 20) {
            elProgressbar.classList.add('critical');
        }
    };

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    };

    changeHP = (count, cb) => {
        this.hp.current -= count;

        if (this.hp.current <= 0) {
            this.hp.current = 0;
            alert(`Бідний ${this.name} програв бій!`);
        }

        this.renderHP();
        cb && cb(count);
    };
}

export default Pokemon;