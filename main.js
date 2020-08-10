class Eyes {
    constructor(eye, ball) {
        this.ball = ball;
        this.eye = eye;
        this.ballCenterX = ball.offsetWidth / 2;
        this.ballCenterY = ball.offsetHeight / 2;
        this.ballX = ball.getBoundingClientRect().left + this.ballCenterX;
        this.ballY = ball.getBoundingClientRect().top + this.ballCenterY;
        this.maxMove = this.eye.clientWidth / 2 - this.ballCenterX;
        this.timer = null;
    }
    init() {
        console.log(1);
        this.events();
    }

    events() {
        window.addEventListener('mousemove', (e) => this.mouseMove(e, this));
    }

    mouseMove(e, _this) {
        if (_this.timer === null) {
            _this.timer = setTimeout(() => {
                let pointX = e.clientX - _this.ballX;
                let pointY = e.clientY - _this.ballY;

                let pointRadian = Math.atan2(pointX, pointY); // 弧度

                let pointRadius = Math.floor(_this.radius({ //半径
                    x: pointX - this.ballCenterX,
                    y: pointY - this.ballCenterY
                }));

                let ballPos = _this.pos_xy(Math.min(_this.maxMove, pointRadius / 5), pointRadian); //位置
                _this.setPos(Math.floor(ballPos.x + _this.maxMove), Math.floor(ballPos.y + _this.maxMove))
                _this.timer = null;
            }, 200)
        }
    }
    setPos(left, top) {
        this.ball.style.top = `${top}px`;
        this.ball.style.left = `${left}px`
    }
    pos_xy(radius, radian) {
        return {
            x: Math.sin(radian) * radius,
            y: Math.cos(radian) * radius,
        }
    }
    radius(pos) {
        // 勾股定理
        return Math.sqrt(Math.pow(pos.x, 2) + Math.pow(pos.y, 2));
    }
}



const leftEye = new Eyes(document.querySelector('.left.eye'), document.querySelector('.left>.ball'));
const rightEye = new Eyes(document.querySelector('.right.eye'), document.querySelector('.right>.ball'));
leftEye.init();
rightEye.init();