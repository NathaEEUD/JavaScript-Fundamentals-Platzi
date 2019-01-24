const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnStart = document.getElementById('btnStart')
const ULTIMO_NIVEL = 10

class Game {
    constructor() {
        this.initialize()
        this.generateSequence()
        setTimeout(() => {
            this.nextLevel()
        }, 1000)
    }

    initialize() {
        this.chooseColor = this.chooseColor.bind(this)

        this.toggleBtnStart()

        this.level = 1
        this.colors = {
            // celeste: celeste, === celeste,
            celeste,
            violeta,
            naranja,
            verde
        }
        console.log(this.colors)
    }

    toggleBtnStart() {
        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide')
        } else {
            btnStart.classList.add('hide')
        }
    }

    generateSequence() {
        this.sequence = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.sublevel = 0
        this.illuminateSquence()
        this.addEventsClick()
    }

    illuminateSquence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i])
            console.log(color)
            setTimeout(() => this.illuminateColor(color), 1000 * i)
        }
    }

    transformNumberToColor(number) {
        switch (number) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    illuminateColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => this.turnOffColor(color), 350)
    }

    turnOffColor(color) {
        this.colors[color].classList.remove('light')
    }

    addEventsClick() {
        this.colors.celeste.addEventListener('click', this.chooseColor)
        this.colors.violeta.addEventListener('click', this.chooseColor)
        this.colors.naranja.addEventListener('click', this.chooseColor)
        this.colors.verde.addEventListener('click', this.chooseColor)
    }

    chooseColor(ev) {
        const nameOfColor = ev.target.dataset.color
        const numberOfColor = this.transformColorToNumber(nameOfColor)
        this.illuminateColor(nameOfColor)

        if (numberOfColor === this.sequence[this.sublevel]) {
            this.sublevel++
            console.log(this.sublevel)
            if (this.sublevel === this.level) {
                this.level++
                this.removeEventsClick()
                if (this.level === (ULTIMO_NIVEL + 1)) {
                    this.youWin()
                } else {
                    // setTimeout(this.nextLevel.bind(this), 2000)
                    setTimeout(() => this.nextLevel(), 1500)
                }
            }
        } else {
            this.youLose()
        }
    }

    transformColorToNumber(color) {
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    removeEventsClick() {
        this.colors.celeste.removeEventListener('click', this.chooseColor)
        this.colors.violeta.removeEventListener('click', this.chooseColor)
        this.colors.naranja.removeEventListener('click', this.chooseColor)
        this.colors.verde.removeEventListener('click', this.chooseColor)
    }

    youWin() {
        swal('Simón dice:', 'Felicitaciones, ganaste el juego', 'success')
            .then(() => {
                this.initialize()
            })
    }

    youLose() {
        swal('Simón dice:', 'Ohhh, perdiste el juego', 'error')
            .then(() => {
                this.removeEventsClick
                this.initialize()
            })
    }
}

function startGame() {
    window.game = new Game()
}